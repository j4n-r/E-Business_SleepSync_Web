import daynightclock from "~/assets/images/daynightclock.jpg";
//Bild verfügbar unter: https://www.hogrefe.com/index.php?eID=dumpFile&t=f&f=2903&token=405d45bc4d2493f0cf9b80ba030d355581ad400c
import scn from "~/assets/images/scn.png"
//Bild verfügbar unter: https://www.orthomed-gmbh.de/wp-content/uploads/2020/11/ortholuna-licht.png
import { motion } from "motion/react";
import { Card, CardContent } from "~/components/ui/card";

export async function loader() {
  return { undefined };
}

const sections = [
  {
    title:"Die innere Uhr in unserem Körper",
    text : `Sie kennen das bestimmt, sie liegen Nachts im Bett und können nicht Schlafen. Das liegt daran, dass die Melatoninproduktion durch äußere Faktoren
            gestört wurde. Die innere Uhr unseres Körpers oder besser gesagt der Tag Nacht Rhythmus steuert unser Müdigkeitsgefühl. Jede Zelle und jedes Gewebe in unserm Körper besitzt
            eine innere Uhr. Am meisten wird diese durch das Licht gesteuert. Während blaues Licht eine Melatoninhemmende Wirkung auf unseren Körper hat, hat rotes Licht
            eine Melatoninfördernde Wirkung auf unseren Körper. Beide Spektren des Lichtes simuliert unsere Wecklampe. Während sie sich Schlaflegen wollen projiziert die
            Lampe ein rotes Licht, und während sich langsam wach werden ein blaues Licht, was denn Sonnenaufgang simulieren soll. Auch andere Faktoren wie zum Beispiel die
            letzte Mahlzeit vor dem Schlafengehen haben Einfluss auf die Melatoninproduktion. Der Verdauungstrakt arbeitet und die Leber und Niere arbeiten und signalisieren dem
            Suprachiasmatischen Nucleus (SCN), dass es noch nicht Zeit ist, sich Schlafen zu legen. Weiter Faktoren, die die Melatoninproduktion beeinflussen sind, Stress, Koffein und
            starke körperliche Bewegung.`,
    image : daynightclock
  },
  {
    title:"Der Suprachaisamatischer Nucleus",
    text: `Einfachheitshalber wird der Suprachiasmatischer Nucleus mit SCN abgekürzt. Der SCN ist Haupt Uhr in unserem Körper. Er sitzt Hypothalamus unseres Gehirns,
           direkt hinter den Sehnerven. Er koordiniert unsere innere Uhr im gesamten Körper, in einem 24 Stunden Rhythmus. Die Hauptsignale kommen über die Sehnerven
           unsere Augen. Wenn blaues Licht von den Sehnerven wahrgenommen wird, werden diese Signale an den SCN weitergeleitet und die Produktion von Cortisol wird gefördert
           und die Produktion von Melatonin wird gehemmt. Die Produktion von Cortisol geschieht vor allem morgens. Cortisol ist ein Hormon, das in den Nebennieren produziert wird, dass auch
           als Stresshormon bezeichnet wird. Es fördert den Blutzuckerspiegel, indem es die Umwandlung von Proteinen und Fetten in Glukose (Fruchtzucker) anregt. In Stresssituationen wird es
           freigesetzt und es schärft die Aufmerksamkeit und setzt den Körper in Alarmbereitschaft. Der Gegenspieler zu Cortisol in Bezug auf den Tag Nacht Rhythmus ist Melatonin.
           Melatonin wird in der Zirbeldrüse im Gehirn produziert. Melatonin wird bei rotem Licht vor allem produziert und es signalisiert dem Körper, dass es Zeit ist, sich Schlafen
           zu legen. Die Signale an die Zirbeldrüse kommen direkt vom SCN, je nach Lichtart die Sehnerven an den SCN weiterleiten. Der SCN passt sich an. Zum Beispiel, wenn sie immer zu einer
           bestimmten Zeit schlafen gehen, passt sich der SCN so an, dass die Melatoninproduktion zu dieser Zeit gefördert wird. Es sei denn sie Essen zu dieser Zeit noch etwas Nahrhaftes oder
           bewegen sich viel, dann passiert es, dass sie sich nicht so müde fühlen.`,
      image : scn
  },

  {
    title: "Wie kann SleepSync den Tag Nacht Rythmus unterstützen?",
    text:`Unser Produkt projiziert am Abend Rotes Licht, was die Melatoninproduktion im Gehirn fördert und so eine natürliche Einschlafhilfe bietet. 20-30 Minuten bevor sie aufwachen wird blaues Licht projiziert,
          was einen Sonnenaufgang simuliert und die Cortisolproduktion fördert. Wenn sie immer zu bestimmten Zeiten Schlafen gehen wollen, hilft ihnen SleepSync dabei, 
          ihre innere Uhr in den gewünschten Rythmus zu verschieben. Besonders hilfreich ist unser Produkt in dieser Hinsicht bei Personen mit einem unregelmäßigen Tagesablauf, wie bei 
          Vielreisenden oder Schichtarbeitern. `,
    image : null
  }
];

export default function DayNightRythmus() {
  return (
    <div className="p-6 space-y-8">
    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-center">
      Die innere Uhr in unserem Körper
    </motion.h1>
    <div className="grid gap-8">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3 }}
        >
          <Card className="shadow-lg rounded-2xl">
            <CardContent className={`p-6 space-y-4 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:items-stretch`}> 
              {section.image && (
                <img src={section.image} alt={section.title} className="w-1/3 h-auto rounded-xl self-center md:self-auto" />
              )}
              <div className="md:w-full md:pl-6 flex flex-col justify-center">
                <h2 className="text-3xl font-semibold">{section.title}</h2>
                <p className="text-lg leading-relaxed">{section.text}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
  );
}