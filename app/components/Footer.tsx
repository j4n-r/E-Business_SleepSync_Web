import { Copyright } from "lucide-react";

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
          <div>Blog</div>
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
