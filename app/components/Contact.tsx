"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const contactItems = [
  {
    label: "Email",
    value: "abdelrhmanmohamedghazy2000@gmail.com",
    href: "mailto:abdelrhmanmohamedghazy2000@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+201019669374",
    href: "tel:+201019669374",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Tanta, Egypt • Remote",
    href: undefined,
    icon: MapPin,
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_W3F_KEY ?? "");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setStatus("success");
        setStatusMessage("Message sent successfully. I'll get back to you soon.");
        form.reset();
      } else {
        setStatus("error");
        setStatusMessage(result?.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="w-full border-t border-white/8 bg-white/[0.02] px-4 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Get in touch"
          title="Have an idea? Let's make it profitable"
          description="Tell me about your project — MVP, dashboard, store, or full platform. I reply within 24 hours."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card flex flex-col gap-6 p-6 sm:p-8 lg:col-span-5"
          >
            <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/[0.07] p-4 text-sm leading-6 text-emerald-100">
              <span className="font-bold">Average reply time: under 24h.</span>
              <br />
              Prefer chat? WhatsApp below is fastest.
            </div>
            <div className="space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="mt-1 rounded-2xl border border-white/12 bg-white/[0.06] p-2.5 text-indigo-100">
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block truncate text-sm font-semibold text-white transition-colors hover:text-indigo-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/AbdElrhman-Mohamed-Ghazy"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-100 transition-all hover:border-indigo-300/40 hover:text-white"
              >
                <FaGithub size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abdelrhman-aboelmagd-1b6b1a345/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-100 transition-all hover:border-indigo-300/40 hover:text-white"
              >
                <FaLinkedin size={16} />
                LinkedIn
              </a>
            </div>

            <a
              href="https://wa.me/201019669374?text=Hi%20Abdelrhman,%20I%20saw%20your%20portfolio..."
              target="_blank"
              rel="noreferrer"
              className="group mt-2 inline-flex items-center justify-center gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3.5 font-display text-base text-zinc-200 shadow-xl transition-all hover:scale-[1.02] hover:bg-emerald-500/20 hover:text-white"
            >
              <span>Contact on WhatsApp</span>
              <MessageCircle size={20} className="text-emerald-400 transition-transform group-hover:scale-110" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card space-y-5 !rounded-3xl p-6 sm:p-8"
            >
              <h3 className="font-display text-xl font-bold text-white">
                Contact with me
              </h3>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-2xl border border-white/12 bg-[#0a0e1a]/80 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-300/60"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-2xl border border-white/12 bg-[#0a0e1a]/80 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-300/60"
              />
              <textarea
                name="message"
                rows={5}
                required
                placeholder="What do you want to build?"
                className="w-full resize-none rounded-2xl border border-white/12 bg-[#0a0e1a]/80 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-300/60"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send "}
              </button>
              <AnimatePresence mode="wait">
                {statusMessage ? (
                  <motion.p
                    key={status}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    aria-live="polite"
                    className={`text-center text-xs ${
                      status === "success" ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {statusMessage}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
