import { motion } from "motion/react";
import { Link } from "react-router";
import { Card, CardContent } from "~/components/ui/card";

export default function Shipping() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen bg-gray-100 p-4"
    >
      <Card className="max-w-3xl w-full p-6 shadow-lg bg-white rounded-2xl">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">Versand 🚚</h1>
          <p className="mb-4">
            Wir versenden unsere Artikel mit DHL.
          </p>
          <p className="mb-4">
            Bestellungen vor 14 Uhr werden i.d.R. am gleichen Tag verschickt. 🙂
          </p>

          <h2 className="text-xl font-bold mt-6 mb-2">Partnershops 🛒</h2>
          <p className="mb-4">Unsere Produkte sind auch bei folgenden Partnern erhältlich:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Amazon</li>
            <li>MediaMarkt</li>
            <li>Saturn</li>
          </ul>

          <div className="mt-6">
            <Link to="/" className="text-blue-600 hover:underline">Zurück zur Startseite</Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}