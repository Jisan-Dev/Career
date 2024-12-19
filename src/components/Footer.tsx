import React from "react";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";
import Image from "next/image";
import LogoFooter from "../../public/LogoFooter.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          {/* <h1 className="text-xl font-bold text-lime-400 flex items-center">
            <span className="mr-2 text-2xl">🛍</span> TokoJobs
          </h1> */}
          <Image src={LogoFooter} alt="logo" />
          <p className="mt-4 text-sm leading-relaxed">
            Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-lime-400">
              <Twitter />
              {/* Replace with an icon library like FontAwesome */}
            </a>
            <a href="#" className="hover:text-lime-400">
              <Facebook />
            </a>
            <a href="#" className="hover:text-lime-400">
              <Instagram />
            </a>
            <a href="#" className="hover:text-lime-400">
              <Github />
            </a>
          </div>
        </div>

        {/* Address and Contact */}
        <div>
          <h2 className="font-bold text-lg text-gray-100">Address</h2>
          <p className="mt-2 text-sm">
            123 Main St, Suite 500,
            <br />
            New York, NY 10001
          </p>
          <h2 className="font-bold text-lg text-gray-100 mt-6">Contact</h2>
          <p className="mt-2 text-sm">
            +1 (333) 000-0000
            <br />
            <a href="mailto:support@tokojobs.com" className="hover:text-lime-400">
              support@tokojobs.com
            </a>
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="font-bold text-lg text-gray-100">Navigation</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-lime-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-400">
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h2 className="font-bold text-lg text-gray-100">Help</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-lime-400">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-400">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-400">
                Terms & Condition
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
        <p>© 2024 Career. All rights reserved.</p>
        <p className="mt-2">
          Designed by <span className="text-lime-400">Istiak Jisan</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
