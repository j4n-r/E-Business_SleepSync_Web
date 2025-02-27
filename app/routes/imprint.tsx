import { motion } from "motion/react";
import { Link } from "react-router";
import { Card, CardContent } from "~/components/ui/card";

export default function Impressum() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen bg-gray-100 p-4"
    >
      <Card className="max-w-3xl w-full p-6 shadow-lg bg-white rounded-2xl">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">Impressum</h1>
          <p className="mb-2">Angaben gemäß § 5 TMG:</p>
          <p className="mb-4">
            SleepSync GmbH<br />
            Straße des Schlafens 45<br />
            12345 Schlafstadt
          </p>
          <p className="mb-2 font-semibold">Kontakt:</p>
          <p className="mb-4">
            Telefon: +49 123 4567890<br />
            E-Mail: <a href="mailto:kontakt@sleepsync.com" className="text-blue-600 hover:underline">kontakt@sleepsync.com</a>
          </p>
          <p className="mb-2 font-semibold">Umsatzsteuer-ID:</p>
          <p className="mb-4">DE123456789</p>
          <p className="mb-2 font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
          <p className="mb-4">
            SleepSync GmbH<br />
            Straße des Schlafens 45<br />
            12345 Schlafstadt
          </p>
          <div className="mt-6">
            <Link to="/" className="text-blue-600 hover:underline">Zurück zur Startseite</Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
