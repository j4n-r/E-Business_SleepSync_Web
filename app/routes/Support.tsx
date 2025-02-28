import { Link } from "react-router";

export default function Support() {
  return (
    <main className="p-10 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Support</h1>

      <p className="mb-4">
        Benötigst du Hilfe oder hast du Fragen zu unseren Produkten? Unser
        Support-Team steht dir gerne zur Verfügung. Kontaktiere uns einfach per
        E-Mail oder Telefon. Wir sind gerne für dich da!
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        So kontaktierst du uns
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Email: support@sleepsync.com</li>
        <li>Telefon: (0800) 123456</li>
      </ul>
      <p>Wir melden uns per Mail innerhalb 48 Stunden bei dir!</p>

      <div className="mt-6">
        <Link to="/" className="text-blue-600 hover:underline">
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
