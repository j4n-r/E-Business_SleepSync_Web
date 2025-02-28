import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Link } from "react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { Button } from "./ui/button";
import { LucideShoppingCart } from "lucide-react";
import { getCartItems } from "~/api/shoppingCardApi";

export function Navbar({ setIsCartOpen }) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <header className="text-white sticky top-0 z-40 w-full bg-black">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">SleepSync</span>
        </Link>

        <nav className="hidden gap-20 text-lg md:flex">
          <Link
            to="/features"
            className="transition-colors hover:text-gray-400"
          >
            Features
          </Link>
          <Link
            to="/sleepfunction"
            className="transition-colors hover:text-gray-400"
          >
            Schlafwissen
          </Link>
          <Link
            to="/daynightrythmus"
            className="transition-colors hover:text-gray-400"
          >
            Tag Nacht Rythmus
          </Link>
          <Link to="/shop" className="transition-colors hover:text-gray-400">
            Shop
          </Link>
        </nav>

        <div className="flex items-center space-x-4 ">
          {" "}
          <div
            role="button"
            className="relative p-2"
            onClick={() => setIsCartOpen(true)}
          >
            <LucideShoppingCart className="" />
            {getCartItems().length == 0 ? (
              ""
            ) : (
              <sup className="absolute top-1 right-0 text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5 transform translate-x-1/2 -translate-y-1/2">
                {" "}
                {getCartItems().length}
              </sup>
            )}
          </div>
        </div>
      </div>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#ffffff",
        }}
      />
    </header>
  );
}
