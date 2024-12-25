"use client";

import React, { useState } from "react";
import logo from "../../public/LogoCreate.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import AnimatedBackground from "./ui/animated-background";
import { usePathname } from "next/navigation";
import { AnimatedHamburgerButton } from "./ui/AnimatedHamburgerButton";

interface Link {
  sn: number;
  title: string;
  href: string;
}

const Navbar = () => {
  const [active, setActive] = useState<boolean>(false);
  const path = usePathname();
  console.log(path);

  const links: Link[] = [
    {
      sn: 1,
      title: "Home",
      href: "/",
    },
    {
      sn: 2,
      title: "Latest Jobs",
      href: "/latest-jobs",
    },
    {
      sn: 3,
      title: "Upload CV",
      href: "/upload-cv",
    },
    {
      sn: 4,
      title: "Post a Job",
      href: "/post-job",
    },
  ];

  return (
    <nav className="container mx-auto flex items-center justify-between sm:py-8">
      <div>
        <Image width={136} height={36} src={logo} className="max-sm:w-40" alt="Logo" />
      </div>
      {/* <ul className="flex gap-7">
        {links.map((link) => (
          <li key={link.sn}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul> */}
      <div className="flex items-center justify-center gap-1">
        <AnimatedBackground
          defaultValue={links[0].title}
          className="rounded-lg bg-primary dark:bg-zinc-800"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
          enableHover>
          {links.map((link) => (
            <button
              key={link.sn}
              data-id={link.title}
              className={`max-sm:hidden px-3 py-1 font-medium text-zinc-600 transition-colors duration-300 dark:text-zinc-400 hover:text-zinc-50 ${
                path === link.href && "bg-primary rounded-lg text-zinc-50"
              } `}>
              {link.title}
            </button>
          ))}
        </AnimatedBackground>
      </div>
      <div>
        <div className="sm:hidden">
          <AnimatedHamburgerButton active={active} setActive={setActive} />
        </div>
        <Button variant={"outline"} className="mr-1 max-sm:hidden">
          Sign In
        </Button>
        <Button className=" max-sm:hidden">Sign Up</Button>
      </div>
      {/* <div className={`relative lg:hidden`}> */}
      <div
        className={`absolute z-50 bg-violet-50 divide-y divide-gray-100 shadow w-full min-h-screen overflow-y-auto overflow-x-hidden dark:bg-gray-600 p-3 ${
          !active ? "-left-full top-16 opacity-0" : "left-0 top-16 opacity-100"
        } transition-all duration-700 overflow-hidden`}>
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.sn}
              data-id={link.title}
              className={` px-3 py-3 font-medium text-zinc-600 transition-colors duration-300 dark:text-zinc-400 text-xl hover:text-zinc-50 ${
                path === link.href && "bg-primary rounded-lg text-white"
              } `}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
