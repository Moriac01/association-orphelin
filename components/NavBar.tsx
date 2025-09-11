"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "accueil", href: "/" },
    { name: "à propos", href: "/about" },
    { name: "nos actions", href: "/actions" },
    { name: "actualités", href: "/blog" },
    { name: "devenir bénévole", href: "/volunteer" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 ">
      <div className=" flex items-center justify-between p-4 lg:px-15 px-8 bg-white shadow-md">
        {/* Logo */}
        <Link href="/">
          <div className="flex flex-col  justify-center">
            <h1 className="flex items-center ">
              <Image
                src="/aso.jpg"
                alt="Logo"
                width={60}
                height={60}
                className="object-cover"
              />
              <p className="text-5xl font-bold text-sky-400/100 ">ASO</p>
            </h1>
            <span className="text-xs font-semibold text-sky-400/100">
              Association Soutien Orphelins
            </span>
          </div>
        </Link>

        {/*  Lien Navigation */}
        <nav className=" flex items-center gap-8  ">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className={`hidden capitalize lg:flex gap-8 items-center justify-center ${pathname === link.href ? 'text-sky-500' : ''}`}
              >
                <span className={`hidden lg:flex text-lg font-medium ${pathname === link.href ? 'text-sky-500' : 'text-gray-700 hover:text-sky-500'}`}>
                  {link.name}
                </span>
              </Link>
            ))}
        </nav>
        <Link href="/donate">
          <span className="hidden capitalize lg:flex text-lg font-medium text-gray-700 hover:text-sky-500">
            faire un don
          </span>
        </Link>

        {/* Bouton burger */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded focus:outline-none"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(!open)}
        >
          <CiMenuFries size={32} />
        </button>

        {/* Menu mobile */}
        {open && (
            <nav className="lg:hidden absolute capitalize top-25 pt-4 pb-4 left-0 w-full bg-gray-100 shadow-md">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className={`text-center block px-4 py-2 text-lg font-medium ${pathname === link.href ? 'text-sky-500' : 'text-gray-700 hover:text-sky-500'}`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/donate" onClick={() => setOpen(false)}>
                <span className="block text-center px-4 py-2 text-lg font-medium text-gray-700 hover:text-sky-500">
                  faire un don
                </span>
              </Link>
            </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
