import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/case-results")({
  head: () => ({
    meta: [
      { title: "Case Results — Kaplan & William Law Firm" },
      { name: "description", content: "Verdicts and settlements demonstrating our record of results across personal injury, criminal defense and commercial litigation." },
    ],
  }),
  component: CaseResultsPage,
});

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 500, prefix: "$", suffix: "M+", label: "Total Recovered" },
  { value: 5200, suffix: "+", label: "Cases Won" },
  { value: 40, suffix: "+", label: "Years Practicing" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const cases = [
  { amount: "$24.5M", type: "Personal Injury", title: "Construction Site Catastrophic Injury", desc: "Verdict secured for a worker permanently disabled by a third-party contractor's negligence." },
  { amount: "$12.8M", type: "Wrongful Death", title: "Trucking Collision — I-95", desc: "Settlement against a national logistics carrier following a fatal commercial truck accident." },
  { amount: "Dismissed", type: "Federal Criminal Defense", title: "Securities Fraud Indictment", desc: "All counts dismissed on motion practice before trial in the Southern District of New York." },
  { amount: "$8.2M", type: "Medical Malpractice", title: "Misdiagnosis Resulting in Loss", desc: "Jury verdict against a major hospital network for a preventable diagnostic failure." },
  { amount: "Acquitted", type: "Criminal Defense", title: "First-Degree Assault Trial", desc: "Full acquittal after a three-week jury trial in New York Supreme Court." },
  { amount: "$6.5M", type: "Inheritance Claim", title: "Contested Multi-State Estate", desc: "Recovered the rightful share of a contested estate for three sibling heirs." },
];

export default function CaseResultsPage() {
  return (
    <>
      <PageHero eyebrow="Case Results" title="A Record That Speaks for Itself" subtitle="Past results do not guarantee outcomes — but they do reveal a pattern." />

      <section className="bg-navy-deep py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl text-gold md:text-6xl"><Counter to={s.value} prefix={s.prefix} suffix={s.suffix} /></div>
              <div className="mt-3 text-sm uppercase tracking-widest text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border bg-card p-8 transition hover:-translate-y-1 hover:shadow-elegant">
                <p className="font-display text-4xl text-gradient-gold">{c.amount}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-gold">{c.type}</p>
                <h3 className="mt-4 font-display text-xl text-navy">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
