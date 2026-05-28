"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  GitBranch,
  Link,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

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
    value: "Tanta, Egypt",
    href: undefined,
    icon: MapPin,
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

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
        setStatusMessage(
          result?.message ??
            "Something went wrong. Please try again in a moment."
        );
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again in a moment.");
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="w-full border-t border-zinc-800/60 px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Let&apos;s build something secure and scalable.
          </h2>
        </div>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/70 p-6 shadow-[0_0_28px_rgba(99,102,241,0.08)]">
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full border border-zinc-800/60 bg-zinc-900/80 p-2 text-zinc-200">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-sm text-zinc-200 transition-colors hover:text-indigo-100"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-zinc-200">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://github.com/AbdElrhman-Mohamed-Ghazy"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-200 transition-all hover:border-indigo-400/60 hover:text-indigo-100 hover:shadow-[0_0_24px_rgba(99,102,241,0.25)]"
              >
                <GitBranch size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abdelrhman-aboelmagd-1b6b1a345/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-200 transition-all hover:border-indigo-400/60 hover:text-indigo-100 hover:shadow-[0_0_24px_rgba(99,102,241,0.25)]"
              >
                <Link size={16} />
                LinkedIn
              </a>
            </div>
            <a
              href="https://wa.me/201019669374?text=Hi%20Abdelrhman,%20I%20saw%20your%20portfolio..."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-emerald-500"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-zinc-800/50 bg-zinc-900/70 p-6 shadow-[0_0_28px_rgba(99,102,241,0.08)]"
          >
            <input
              type="hidden"
              name="access_key"
              value="530c1c3a-612a-4165-a805-c2bbbfced192"
            />
            <div>
              <label
                htmlFor="name"
                className="text-xs uppercase tracking-[0.3em] text-zinc-500"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-zinc-800/50 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-indigo-400/70 focus:ring-1 focus:ring-indigo-400/60"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-[0.3em] text-zinc-500"
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-zinc-800/50 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-indigo-400/70 focus:ring-1 focus:ring-indigo-400/60"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-[0.3em] text-zinc-500"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project (sent to abdelrhmanmohamedghazy2000@gmail.com)"
                className="mt-2 w-full rounded-xl border border-zinc-800/50 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-indigo-400/70 focus:ring-1 focus:ring-indigo-400/60"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-indigo-400/40 bg-gradient-to-r from-indigo-500/90 via-indigo-400/90 to-purple-500/90 px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(99,102,241,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
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
                    status === "success"
                      ? "text-emerald-400"
                      : "text-rose-400"
                  }`}
                >
                  {statusMessage}
                </motion.p>
              ) : null}
            </AnimatePresence>
            <p className="text-center text-xs text-zinc-500">
              This form sends an email directly to
              {" "}
              abdelrhmanmohamedghazy2000@gmail.com
            </p>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
