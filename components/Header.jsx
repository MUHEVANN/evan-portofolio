import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Vanns<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* mobile */}
        <div className="flex xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
