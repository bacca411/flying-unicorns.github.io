"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/Toys", label: "Toys" },
    { href: "/Fan-Scifi", label: "Fantasy/Sci-Fi Decor" },
    { href: "/Items", label: "Game Items" },
    { href: "/Decor", label: "Decor" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-black via-gray-900 to-red-900 shadow-lg border-b border-[rgba(255,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-white text-2xl font-extrabold drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] hover:text-red-500 transition"
        >
          Flying Unicorn
        </Link>

        {/* Links */}
        <div className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-white font-medium hover:text-red-400 hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] transition ${
                pathname === href
                  ? "text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
