"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
            {/* You can put dropdown or child items here if needed */}
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="our courses"
        >
           <div className="flex flex-col space-y-4 text-sm">
           <HoveredLink href="/courses">All courses
           </HoveredLink>
           <HoveredLink href="/courses"> Basic music
           </HoveredLink>
           <HoveredLink href="/courses">advanced composition 
           </HoveredLink>
           <HoveredLink href="/courses">songwriting 
           </HoveredLink>
           <HoveredLink href="/courses">Music Production 
           </HoveredLink>
           </div>
           </MenuItem>

           <Link href={"/contact"}>
           <MenuItem setActive={setActive} active={active} item="contact us ">
          </MenuItem>
           </Link>
          
      </Menu>
    </div>
  );
}

export default Navbar;
