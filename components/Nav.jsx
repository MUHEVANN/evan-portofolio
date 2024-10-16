"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Nav() {
  const links = [
    {
      name: "home",
      href: "/",
    },

    {
      name: "resume",
      href: "/resume",
    },
    {
      name: "work",
      href: "/work",
    },
    {
      name: "contact",
      href: "/contact",
    },
  ];

  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((item, i) => (
        <Link
          href={item.href}
          key={i}
          className={`${
            pathname === item.href && "text-accent border-b-2 border-accent "
          } capitalize hover:text-accent transition-all`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
