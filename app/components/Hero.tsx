"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* copy — marketing first */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-200 backdrop-blur-md lg:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for freelance &amp; full-time
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold text-indigo-200 lg:justify-start"
            >
              <Sparkles size={15} />
              Full Stack .NET &amp; Angular — Egypt / Remote
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-[42px] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[68px]"
            >
              I build <span className="text-shine">profit-ready</span>
              <br />
              web products.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-8 mt-5 max-w-xl text-base leading-relaxed text-slate-300/95 sm:text-lg lg:mx-0"
            >
              I&apos;m{" "}
              <span className="special-font text-2xl text-white">
                Abdelrhman Aboelmagd
              </span>{" "}
              — I turn ideas into fast, secure platforms: bulletproof ASP.NET
              Core APIs on the backend, pixel-clean Angular experiences on the
              frontend.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="btn-primary w-full sm:w-auto"
              >
                View My Work
                <ArrowRight size={16} />
              </a>
              <a
                href="/Abdelrhman_Aboelmagd_Backend Developer (.NET)_CV.pdf"
                download
                className="btn-ghost w-full sm:w-auto"
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-7 flex items-center justify-center gap-3 lg:justify-start"
            >
              {[
                { href: "https://github.com/AbdElrhman-Mohamed-Ghazy", icon: FaGithub, label: "GitHub" },
                { href: "https://www.linkedin.com/in/abdelrhman-aboelmagd-1b6b1a345/", icon: FaLinkedin, label: "LinkedIn" },
                { href: "mailto:abdelrhmanmohamedghazy2000@gmail.com", icon: FaEnvelope, label: "Email" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="rounded-2xl border border-white/12 bg-white/[0.06] p-3 text-slate-200 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-indigo-300/50 hover:text-white hover:shadow-[0_15px_35px_-12px_rgba(99,102,241,0.7)]"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
              <a
                href="#contact"
                className="ml-1 text-sm font-semibold text-indigo-200 underline-offset-4 hover:text-white hover:underline"
              >
                Let&apos;s talk →
              </a>
            </motion.div>
          </div>

          {/* visual */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-6 transform-gpu rounded-[2.5rem] bg-[conic-gradient(from_180deg,rgba(99,102,241,0.35),rgba(217,70,239,0.25),rgba(244,63,94,0.3),rgba(99,102,241,0.35))] blur-2xl" />
            <div className="animate-float-slow relative rounded-[2rem] border border-white/15 bg-white/[0.05] p-3 shadow-[0_40px_100px_-30px_rgba(99,102,241,0.6)] backdrop-blur-xl">
              <Image
                src="/1758737080428.jpeg"
                alt="Abdelrhman Aboelmagd portrait"
                width={560}
                height={660}
                priority
                sizes="(max-width: 1024px) 85vw, 460px"
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
              <div className="pointer-events-none absolute inset-3 rounded-[1.5rem] bg-gradient-to-t from-[#0a0e1a]/70 via-transparent to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex items-center justify-between rounded-2xl border border-white/15 bg-[#0a0e1a]/80 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="font-display text-sm font-bold text-white">
                    Abdelrhman Aboelmagd
                  </p>
                  <p className="text-xs text-slate-300">
                    Full Stack • .NET + Angular
                  </p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Open
                </span>
              </div>
            </div>

            <div className="absolute -right-2 top-8 rounded-2xl border border-violet-300/30 bg-[#151232]/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:-right-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-violet-200">
                Backend
              </p>
              <p className="font-display text-sm font-bold text-white">
                ASP.NET Core • C#
              </p>
            </div>
            <div className="absolute -left-2 top-1/3 rounded-2xl border border-rose-300/30 bg-[#221016]/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:-left-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-rose-200">
                Frontend
              </p>
              <p className="font-display text-sm font-bold text-white">
                Angular • TypeScript
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      <div className="h-16 md:h-20" />
    </section>
  );
}
