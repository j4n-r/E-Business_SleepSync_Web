import { motion } from "motion/react";
import { Link } from "react-router";
import { Card, CardContent } from "~/components/ui/card";

export async function loader() {
  return { undefined };
}

export default function DayNightRythmus() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-8"
    >
      <Card className="shadow-lg">
        <CardContent>
          <h1 className="text-3xl font-bold mb-4">Funktion des Schlafes</h1>
          <p className="text-gray-700">
            {/* Hier kommt der Erklärungstext zur Funktion des Schlafes */}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}