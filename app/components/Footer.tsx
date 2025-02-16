import { Copyright } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <section className=" bg-black text-white p-20">
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <span>Newsletter</span>
        </div>
        <div className="grid grid-cols-3 col-span-3">
          <div>Unternehmen</div>
          <div>Suppot</div>
          <Link to="/imprint" className="text-white hover:underline">Impressum</Link>

        </div>
      </div>
      <hr className="border-gray-700 my-4" />
      <div className="flex text-sm">
        Copyright
        <Copyright className="mx-1" />
        2025 SleepSync
      </div>
    </section>
  );
}
