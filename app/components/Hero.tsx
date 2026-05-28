import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <AnimatedSection
      id="home"
      className="w-full border-b border-zinc-800/60 px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-8">
          
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
              Abdelrhman Aboelmagd
            </h1>
            <h2 className="text-lg font-medium text-zinc-200 sm:text-xl">
              Backend Developer (.NET)
            </h2>
            <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Building Scalable, Secure &amp; Enterprise-Grade Backend Systems.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/Abdelrhman_Aboelmagd_Backend Developer (.NET)_CV.pdf"
              download
              className="group inline-flex h-12 items-center justify-center rounded-full border border-indigo-400/40 bg-gradient-to-r from-indigo-500/90 via-indigo-400/90 to-purple-500/90 px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(99,102,241,0.45)]"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="group inline-flex h-12 items-center justify-center rounded-full border border-zinc-700/70 bg-transparent px-6 text-sm font-semibold text-zinc-100 transition-all duration-300 hover:border-indigo-400/60 hover:text-indigo-100 hover:shadow-[0_0_22px_rgba(99,102,241,0.25)]"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="relative rounded-[28px] border border-zinc-800/50 bg-zinc-900/70 p-3 shadow-[0_0_60px_rgba(99,102,241,0.15)]">
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/5" />
              <Image
                src="/1758737080428.png"
                alt="Abdelrhman Aboelmagd portrait"
                width={520}
                height={620}
                priority
                className="relative h-auto w-full rounded-[22px] object-cover"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
