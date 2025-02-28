import { Copyright } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <section className="bg-black text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center md:text-left">
        <div>
          <Link to="/company" className="text-white hover:underline block">
            Unternehmen
          </Link>
        </div>
        <div>
          <Link to="/support" className="text-white hover:underline block">
            Support
          </Link>
        </div>
        <div>
          <Link to="/imprint" className="text-white hover:underline block">
            Impressum
          </Link>
        </div>
        <div>
          <Link to="/newsletter" className="text-white hover:underline block">
            Newsletter
          </Link>
        </div>
        <div>
        <Link to="/shipping" className="text-white hover:underline block">
            Lieferung und Partnershops
          </Link>
        </div>
      </div>
      
      <hr className="border-gray-700 my-4" />
      <div className="flex justify-center items-center text-sm">
        <Copyright className="mr-1" />
        <span>2025 SleepSync</span>
      </div>
    </section>
  );
}
