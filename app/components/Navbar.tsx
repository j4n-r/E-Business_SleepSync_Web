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

export function Navbar() {
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
          <Link to ="/function_of_sleep" className= "transition-colors hover:text-gray-400">
          Schlaffunktion 
          </Link>
          <Link to = "/day_night_rythmus" className= "transition-colors hover:text-gray-400">
          Tag/Nacht Rythmus 
          </Link>
          <Link to="/pricing" className="transition-colors hover:text-gray-400">
            Pricing
          </Link>
          <Link to="/shop" className="transition-colors hover:text-gray-400">
            Shop
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/101867832?s=400&u=ae243d857b3070615811baee9e9cd8b3fdfe0658&v=4"
                  alt="@shadcn"
                />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <div className="flex items-center gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium">shadcn</p>
                  <p className="w-[200px] truncate text-sm text-muted-foreground">
                    name@website.com
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
