import { useState } from "react";
import { motion } from "framer-motion";
import lamp from "~/assets/images/lampe.png";
import wristband from "~/assets/images/armband.png";
import app from "~/assets/images/app.png";

const components = [
  {
    name: "LED-Lampe mit Lautsprecher",
    image: lamp,
    description: "- Rot- und Blaulichtfunktion für besseren Schlaf\n- Integrierter Lautsprecher für sanftes Wecken"
  },
  {
    name: "Schlaftracking-Armband",
    image: wristband,
    description: "- Misst Puls, Sauerstoffsättigung & Bewegungen\n- Erkennt optimale Weckzeit"
  },
  {
    name: "Handy-App",
    image: app,
    description: "- Individuelle Weckzeiteinstellung\n- Detaillierte Schlafanalyse & Tipps"
  }
];

export default function ComponentDetails() {
  const [selected, setSelected] = useState<null | { name: string; image: string; description: string }>(null);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Unsere Produktkomponenten</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {components.map((comp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div
              onClick={() => setSelected(comp)}
              className="cursor-pointer p-6 w-96 h-64 border rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center justify-center"
            >
              <img src={comp.image} alt={comp.name} className="w-full h-48 object-contain mb-4" />
              <p className="text-center font-semibold text-lg">{comp.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {selected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="mt-6 p-6 w-full md:w-1/2 border rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold">{selected.name}</h2>
          <p className="mt-2 whitespace-pre-line">{selected.description}</p>
          <button
            onClick={() => setSelected(null)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Schließen
          </button>
        </motion.div>
      )}
    </div>
  );
}