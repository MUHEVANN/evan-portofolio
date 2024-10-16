"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiMenuFold3Line } from "react-icons/ri";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
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

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <RiMenuFold3Line className="text-2xl text-accent" />
      </SheetTrigger>
      <SheetContent>
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </VisuallyHidden>
        <div className="flex flex-col gap-6 ">
          {links.map((item, i) => (
            <Link
              href={item.href}
              key={i}
              onClick={() => setIsOpen(false)}
              className={`${
                pathname === item.href &&
                "text-accent border-b-2 border-accent "
              } capitalize hover:text-accent transition-all`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
