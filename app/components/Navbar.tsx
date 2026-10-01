"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="group flex items-center gap-2">
          <span className="special-font text-3xl font-bold tracking-tight text-white transition-colors group-hover:text-zinc-300">
            Abdelrhman
          </span>
          <span className="mt-2 hidden rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 sm:block">
            .NET + Angular
          </span>
        </a>

        <div className="hidden items-center space-x-1 rounded-full border border-white/10 bg-white/[0.06] px-5 py-1.5 shadow-inner backdrop-blur-md md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <span className="flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available
          </span>
          <a
            href="/Abdelrhman_Aboelmagd_Backend Developer (.NET)_CV.pdf"
            download
            className="btn-primary !px-5 !py-2 text-sm"
          >
            Download CV
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="rounded-full border border-white/12 bg-white/[0.06] p-2 text-slate-100 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-[#0b1020]/95 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/Abdelrhman_Aboelmagd_Backend Developer (.NET)_CV.pdf"
              download
              className="btn-primary mt-2 px-4 py-3 text-center text-sm"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
