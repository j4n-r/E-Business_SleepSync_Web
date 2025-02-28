"use client";

import { Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen p-10 max-w-3xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6 text-green-500">
          Vielen Dank für Ihre Bestellung!
        </h1>
        <p className="mb-4">
          Ihre Bestellung wurde erfolgreich aufgegeben. Sie werden in Kürze eine
          Bestätigungs-E-Mail erhalten.
        </p>
        <p>Sie werden in Kürze zur Startseite weitergeleitet.</p>
        <div className="mt-8 flex justify-center items-center">
          <motion.div
            className="animate-spin text-blue-500 h-14 w-14"
            transition={{ loop: Infinity, duration: 0.1 }}
          >
            <Loader2 className="h-14 w-14" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
