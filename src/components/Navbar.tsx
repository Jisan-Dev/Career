import React from "react";
import logo from "../../public/LogoCreate.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface Link {
  sn: number;
  title: string;
  href: string;
}

const Navbar = () => {
  const links: Link[] = [
    {
      sn: 1,
      title: "About",
      href: "/about",
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
      <ul className="flex gap-7">
        {links.map((link) => (
          <li key={link.sn}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
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
