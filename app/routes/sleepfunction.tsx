import chapter1 from "~/assets/images/sleepfunction1.jpg";
import chapter2 from "~/assets/images/sleepfunction2.jpg"
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
            dem Körper, dass es Zeit ist sich Schlafen zu legen und wird während des schlafens konstant im Gehirn ausgeschüttet. Dabei durchlaufen wir 4 Schlafphasen in einem Zyklus, der sich ungefähr 5-7 widerholen.
            Ungefähr 1/3 unseres Lebens, schlafen wir, daher sollte man gut auf seine Schlafqualität achten. Das genau wollen wir mit SleepSync erreichen. Dass ihr Schlaf qualitativ und erholsam ist. `,
      image: chapter1
      
    },
    {
      title: "Die vier Schlafphasen",
      text: `Wie bereits schon erwähnt, durchlaufen wir während des Schlafens vier Phasen in einem Zyklus. Die erste Schlafphasen ist die Einschlafpahse. In dieser Phase ändert sich unser Körper vom 
             Wachzustand zum Schlafzustand. Der Körper fängt an sich langsam zu entspannen. Dennoch ist man in dieser Phase noch leicht weckbar. Die nächste Phase ist die Leichte Schlafphase. In dieser Phase
             fängt der Körper an sich weiter zu enstpannen. Die Vitalwerte wie Herzfrequenz und Atemfrequenz verlangsamen sich und die Bewegungen nemmen weiter ab. Man verbringt den größten Teil seines
             Schlafes in dieser Phase. Nach der Leichten Schlafphase kommt die Tiefschlafphase. In dieser Phase sind die Vitalwerte während des Schlafens am niedrigsten. Diese Schlafphase ist besonders wichtig
             für die Regenartion des Körpers, da in dieser Phase die Zellregeneration und Zellreperatur stattfindet. Je öfter man einen Zyklus durchlaufen hat, desto kürzer ist man in der Tiefschlafphase. Die
             letzte Schlafphase im Zyklus ist die REM-Schlafphase. REM steht für Rapid Eye Movement. Der Name kommt daher, dass man während dieser Schlafphase seine Augen sehr schnell hin und her bewegt.
             Experten interpretieren dass so, das wir unsere Träume sehen und deshalb sich unsere Augen schnell hin und her bewegen. Wie bereits erwähnt, träumen wir in dieser Schlafphase am meisten.
             Die Schlafphase ist auch unteranderem dafür da, dass wir unserer Emotionen, Ereignisse, und Erlebnisse vom Tag verarbeiten. Im REM-Schlaf steigen die Vitalwerte wieder und die Gehirnaktivität
             ist nahe am Wachzustand. Dennoch können wir uns in dieser Schlafphase nicht bewegen. Das ist ein Schutzmechanismus des Körpers, dass wir unsere Träume nicht "leben" können, da unser Gehirn 
             zwischen Traum und Realität nicht unterscheiden kann.`,
      image: chapter2
    },
      {
        title: "Wann ist es am besten aufzuwachen?",
        text: `Wir haben jetzt schon die vier Schlafphasen kennengelernt. Am schlechtesten ist es während der Tiefschlafphase aufzuwachen. Das liegt daran das dort die Gehirnaktivität am niedrigsten ist.
               Man fühlt sich müde und desorientiert wenn man in dieser Schlafphase aufwacht. Am günstigsten ist es beim Übergang von der REM-Schlafphase in die Leichte Schlafphase aufzuwachen. Das liegt
               daran, dass dort die Gehirnaktivität am höchsten ist. Wenn man während des REM-Schlafes aufwacht und aus einem Traum rausgerissen wird, kann man sich auch desorintiert fühlen, weil das Gehirn
               noch zwischen Schlaf und Wachzustand wechselt. Unser Produkt zielt darauf hinaus, dass man am optimalen Punkt aufwacht. Sollte dies aufgrund der Einstellung, die sie vorgenommen nicht möglich
               sein, wird die nächst bessere Phase gefunden, was die Einschlafphase ist.`,
        image: null
        
      },
    
  ];


export default function SleepFunction() {
  return (
    <div className="p-6 space-y-8">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-center">
        Alles was sie über Schlaf wissen müssen!
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
};
