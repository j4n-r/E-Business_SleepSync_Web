import { Link } from "react-router";
import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim() !== "") {
            setIsSubmitted(true);
            setEmail("");
        }
    };
    return (
        <main className="p-10 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Newsletter</h1>
            <p className="mb-4">
                Möchtest du immer auf dem Laufenden bleiben und keine Neuigkeiten mehr verpassen?
                Dann melde dich für unseren Newsletter an! Wir informieren dich regelmäßig über neue
                Produkte, Angebote und Aktionen.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Deine E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
                >
                    Anmelden
                </button>
            </form>
            {isSubmitted && (
                <p className="text-green-500 mt-4">
                    Du hast dich erfolgreich zum Newsletter angemeldet! ✅ 
                </p>
            )}
            <div className="mt-6">
                <Link to="/" className="text-blue-600 hover:underline">Zurück zur Startseite</Link>
            </div>
            <p className="mt-10 text-sm text-gray-500">
          &copy; 2025 SleepSync. Alle Rechte vorbehalten.
        </p>
        </main>
    );
}