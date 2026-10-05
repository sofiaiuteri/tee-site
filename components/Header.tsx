"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { links } from "@/lib/links";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/our-story" },
  { name: "Contribute!", href: "/contribute" },
  { name: "Features", href: "/features" },
  { name: "Team Members", href: "/team" },
  { name: "Advertisers", href: "/advertisers" },
];

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

const purchaseButton = `${buttonBase} gradient-sunset text-forest-dark hover:shadow-nature hover:scale-105 transition-all duration-300 h-9 rounded-md px-3`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-nature">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <img src="/images/logo.png" alt="Experience Exchange Logo" className="h-12 w-12 object-contain" />
            <h1 className="text-xl sm:text-2xl font-serif font-semibold text-forest-dark">The Experience Exchange</h1>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-foreground hover:text-forest-medium hover:border-b-2 hover:border-forest-medium transition-colors duration-200 font-medium ${
                  pathname === item.href ? "text-forest-medium border-b-2 border-forest-medium" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href={links.shop} target="_blank" rel="noopener noreferrer" className={purchaseButton}>
              Purchase
            </a>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className={`${buttonBase} rounded-md transition-colors hover:bg-accent hover:text-accent-foreground h-10 w-10`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                {open ? (
                  <>
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </>
                ) : (
                  <>
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-foreground hover:text-forest-medium transition-colors duration-200 font-medium px-2 py-1 ${
                    pathname === item.href ? "text-forest-medium font-bold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-3 pt-3 border-t border-border">
                <a href={links.shop} target="_blank" rel="noopener noreferrer" className={purchaseButton}>
                  Purchase
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
