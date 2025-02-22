import { motion } from "motion/react";
import { Link } from "react-router";
import { Card, CardContent } from "~/components/ui/card";

export async function loader() {
  return { undefined };
}

  const sections = [
    {
      title: "Was genau ist Schlaf?",
      text:`Schlaf ist zunächst einmal essenziell für unsere Gesundheit, Wohlbefinden und Leistungsaufnahme. Wussten sie zum Beispiel, wenn sie nur 4 Stunden schlafen, dass ihre kognitive Leistungsfähigkeit um 
            30-50% sinkt? Schlaf ist ein biologischer Zustand in dem sich unser Körper befindet um sich zu regenerieren und zu erholen. Melatonin spielt beim Schlafen dabei eine besondere Rolle, es siginalisiert
            dem Körper, dass es Zeit ist sich Schlafen zu legen und wird während des Schlafens konstant im Gehirn ausgeschüttet. `,
      //image:
    },
    {
      title: "Abschnitt 2: Vertiefung",
      text: `Curabitur sit amet turpis finibus, ultricies mi ac, congue libero. 
             Donec ullamcorper metus id elit condimentum, vitae vestibulum ex 
             ultricies. Proin maximus magna in lacus suscipit, nec dignissim 
             sapien interdum.`,
      //image:
    },
    // Weitere Abschnitte können hier ergänzt werden
  ];


export default function SleepFunction() {
  return (
    <div className="space-y-20">
    {sections.map((section, index) => (
      <section key={index} className="grid grid-cols-2 min-h-screen">
        {/* Linke Spalte: Fixiertes Bild */}
        <div className="sticky top-0 h-screen">
          <img
            //src={section.image}
            alt={`Bild zu ${section.title}`}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Rechte Spalte: Scrollbarer Text */}
        <div className="p-10 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-4">{section.title}</h1>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {section.text}
          </p>
        </div>
      </section>
    ))}
  </div>
  );
}