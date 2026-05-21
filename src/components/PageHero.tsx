import { motion } from "framer-motion";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-navy pb-20 pt-40 text-white">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 80% 60%, var(--gold) 0%, transparent 50%)" }} />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {eyebrow && <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</motion.p>}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl leading-tight md:text-6xl">{title}</motion.h1>
        {subtitle && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mx-auto mt-6 max-w-2xl text-lg text-white/70">{subtitle}</motion.p>}
      </div>
    </section>
  );
}
