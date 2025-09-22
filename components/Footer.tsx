"use client"
import Link from "next/link";
import {FaFacebook, FaWhatsapp, FaInstagram} from "react-icons/fa"
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";


export default function Footer() {
    const pathname = usePathname();

  
  const links = [
    { name: "accueil", href: "/" },
    { name: "nos actions", href: "/actions" },
    { name: "actualités", href: "/blog" },
    { name: "devenir membre", href: "/volunteer" },
    { name: "à propos", href: "/about" },
    { name: "contact", href: "/contact" },
  ];

  const socials = [
    {
      icon: <FaFacebook/> , link: "#", color: "text-blue-600", hover: "hover:text-blue-800"
    },
    {
      icon: <FaWhatsapp/> , link: "#", color: "text-green-400", hover: "hover:text-green-500"
    },
    {
      icon: <FaInstagram/> , link: "#", color: "text-pink-400", hover: "hover:text-pink-600"
    },
  ]


  return (
    <footer className="pt-4 mt-16 border-t bg-white">
      <div className=" container max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Newsletter */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
          <p className="text-sm mb-4">
            Inscrivez-vous pour recevoir nos actualités.
          </p>
          <form className="grid gap-4">
            <input
              type="email"
              placeholder="Votre email"
              className="w-[60%] p-2 rounded-lg border text-black "
            />
            <Button className="w-[25%] ">
              <Link href="/Donate">
              Envoyer
              </Link>
            </Button>
          </form>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
          <ul className="space-y-2 text-sm">
            <li>Email : 📧 contact@monsite.com</li>
            <li>Téléphone : 📞 (+236) 72 53 78 46 </li>
            <li>Adresse : 📍 123 Rue, Avenue des Martyrs, Bangui</li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Réseaux</h2>
          <div className="grid grid-cols-3 gap-2 space-x-4 mt-4 ">
            {socials.map((item, index) =>(
              <Link
              key={index}
              href={item.link}
              className={`text-4xl font-medium transition hover:scale-125 ${item.color} ${item.hover}`}
              >
                {item.icon}
              </Link>
            ))}

            
            <div className="pt-6">
              <Button> 
              <Link href="/Donate">
              Faire un don
              </Link>
            </Button>
            </div>
            
            
          </div>
        </div>

        
      </div>

      <div>
          <nav className="container flex items-center  lg:justify-center mt-10 ">
            <div className=" lg:flex gap-4 grid grid-cols-3  justify-center">
              {links.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className={` capitalize lg:flex gap-8 items-center justify-center ${pathname === link.href ? 'text-sky-500' : ''}`}
              >
                <span className={` lg:flex  font-medium ${pathname === link.href ? 'text-sky-500' : 'text-gray-700 hover:text-sky-500'}`}>
                  {link.name}
                </span>
              </Link>
            ))}
            </div>
        </nav>
        </div>

      {/* Ligne du bas */}
      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ASO | All rights reserved.| Design by Moriac 
      </div>
    </footer>
  );
}
