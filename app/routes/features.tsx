import { useState } from "react";
import { motion } from "framer-motion";
import lamp from "~/assets/images/lampe.png";
import wristband from "~/assets/images/armband.png";
import app from "~/assets/images/app.png";

const components = [
  {
    name: "LED-Lampe mit Lautsprecher",
    image: lamp,
    description: "Unsere LED-Lampe mit integriertem Lautsprecher ist ein revolutionäres Element für besseren Schlaf. Sie simuliert den natürlichen Tag-Nacht-Rhythmus mit einer einzigartigen Kombination aus Licht und Klang. Am Abend fördert das warme rote Licht die Melatoninproduktion und signalisiert dem Körper, dass es Zeit ist, sich zu entspannen. Morgens sorgt das blaue Licht für eine sanfte Aktivierung des Körpers, indem es die natürliche Cortisolausschüttung stimuliert und einen Sonnenaufgang simuliert. Der integrierte Lautsprecher bietet eine Auswahl an Naturklängen, entspannender Musik oder individuellen Wecktönen. Über die mobile App lassen sich Helligkeit, Farbtemperatur und Soundeinstellungen personalisieren, um ein perfektes Einschlaf- und Aufwacherlebnis zu ermöglichen."
  },
  {
    name: "Schlaftracking-Armband",
    image: wristband,
    description: "Unser Schlaftracking-Armband bietet modernste Sensorik für eine präzise Analyse des Schlafverhaltens. Es misst kontinuierlich biometrische Daten wie Herzfrequenz, Sauerstoffsättigung, Bewegungsmuster und Hauttemperatur. Durch KI-gestützte Algorithmen erkennt es unterschiedliche Schlafphasen in Echtzeit und berechnet die optimale Weckzeit, um den Körper aus einer leichten Schlafphase heraus zu erwecken. Das Armband speichert alle Daten und erstellt detaillierte Schlafprotokolle, die über die App abrufbar sind. So können langfristige Muster erkannt und gezielt Anpassungen für eine bessere Schlafqualität vorgenommen werden. Das leichte und ergonomische Design sorgt für höchsten Tragekomfort während der Nacht."
  },
  {
    name: "Handy-App",
    image: app,
    description: "Die innovative SleepSync-App ist das Herzstück unseres Schlafsystems und ermöglicht eine vollständig personalisierte Schlafoptimierung. Sie analysiert kontinuierlich Schlafdaten, erstellt detaillierte Berichte und gibt gezielte Empfehlungen zur Verbesserung der Schlafqualität. Die App synchronisiert sich mit dem Schlaftracking-Armband und der LED-Lampe, um eine smarte Weck- und Einschlafroutine zu erstellen. Mit der intelligenten Weckphase sorgt sie dafür, dass du zur optimalen Zeit aus dem Schlaf geholt wirst, um ein erfrischtes Aufwachen zu garantieren. Zusätzlich lassen sich smarte Home-Geräte wie Jalousien oder Thermostate integrieren, um eine ideale Schlafumgebung zu schaffen. Mit dem KI-basierten Coaching erhältst du wertvolle Einblicke und individuelle Tipps für gesunden und erholsamen Schlaf."
  }
];

export default function ComponentDetails() {
  const [selected, setSelected] = useState<null | { name: string; image: string; description: string }>(null);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-6 space-y-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center">Unsere Produktkomponenten</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {components.map((comp, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
            <div 
              onClick={() => setSelected(comp)} 
              className="cursor-pointer p-8 border rounded-2xl shadow-lg hover:shadow-xl transition bg-white"
            >
              <img src={comp.image} alt={comp.name} className="w-full h-64 object-cover rounded-xl" />
              <p className="text-center font-semibold mt-6 text-xl">{comp.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {selected && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.3 }} 
          className="mt-10 p-6 w-full max-w-3xl mx-auto border rounded-2xl shadow-lg bg-white"
        >
          <h2 className="text-3xl font-semibold text-center">{selected.name}</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">{selected.description}</p>
          <button 
            onClick={() => setSelected(null)} 
            className="mt-8 px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mx-auto block"
          >
            Schließen
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
