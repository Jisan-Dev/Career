"use client";

import React from "react";
import logo from "../../public/LogoCreate.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import AnimatedBackground from "./ui/animated-background";
import { usePathname } from "next/navigation";

interface Link {
  sn: number;
  title: string;
  href: string;
}

const Navbar = () => {
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
    <nav className="container mx-auto flex items-center justify-between py-8">
      <div>
        <Image width={136} height={36} src={logo} alt="Logo" />
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
              className={`px-3 py-1 font-medium text-zinc-600 transition-colors duration-300 dark:text-zinc-400 hover:text-zinc-50 ${
                path === link.href && "bg-primary rounded-lg text-zinc-50"
              } `}>
              {link.title}
            </button>
          ))}
        </AnimatedBackground>
      </div>
      <div>
        <Button variant={"outline"} className="mr-1">
          Sign In
        </Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
