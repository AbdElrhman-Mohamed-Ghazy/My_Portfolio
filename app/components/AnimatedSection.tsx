"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({
  id,
  className,
  children,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
