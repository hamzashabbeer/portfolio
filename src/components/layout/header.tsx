"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-background/80 backdrop-blur-xl" : "py-6"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group relative px-4 py-2 overflow-hidden rounded-xl bg-gradient-to-r from-white/[0.15] to-white/[0.05] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 rounded-xl animate-pulse-slow bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
            <span className="relative text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300">
              HS
            </span>
            <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-purple-500/50 to-blue-500/50 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
                <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/[0.05] transition-colors" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="group relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-black/80 to-black/60 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-black/50">
              Let's Talk
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
} 