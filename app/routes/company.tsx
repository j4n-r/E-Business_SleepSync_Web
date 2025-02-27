import { motion } from "motion/react";
import { Link } from "react-router";
import { Card, CardContent } from "~/components/ui/card";

export default function Unternehmen() {
    return (
      <main className="p-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Über unser Unternehmen</h1>
        <p className="mb-4">
          SleepSync ist ein neues und innovatives Unternehmen, das sich auf intelligente
          Schlaftechnologie spezialisiert hat. Unsere Mission ist es, Menschen zu
          einem besseren und erholsameren Schlaf zu verhelfen.
        </p>
  
        <h2 className="text-2xl font-semibold mt-6 mb-2">Unsere Vision</h2>
        <p className="mb-4">
          Wir glauben, dass gesunder Schlaf essenziell für ein glückliches,
          produktives und gesundes Leben ist. Deshalb entwickeln wir smarte Lösungen, die das
          Einschlafen erleichtern und das Aufwachen angenehmer machen.
        </p>
  
        <h2 className="text-2xl font-semibold mt-6 mb-2">Unsere Werte</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Innovative Technologie für besseren Schlaf</li>
          <li>Benutzerfreundlichkeit und modernes Design</li>
          <li>Kundenzufriedenheit an erster Stelle</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-6 mb-2">Kontakt</h2>
        <p className="mb-4">
          Falls du Fragen zu unserem Unternehmen oder zu unseren Produkten hast, zögere nicht uns zu kontaktieren: <a href="mailto:info@sleepsync.com" className="text-blue-500 hover:underline">info@sleepsync.com</a>.
        </p>
        <div className="mt-6">
            <Link to="/" className="text-blue-600 hover:underline">Zurück zur Startseite</Link>
          </div>

        <p className="mt-10 text-sm text-gray-500">
          &copy; 2025 SleepSync. Alle Rechte vorbehalten.
        </p>
      </main>
    );
  }