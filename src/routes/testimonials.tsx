import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { UploadableImage } from "@/components/UploadableImage";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Kaplan & William Law Firm" },
      { name: "description", content: "Real stories from clients who trusted Kaplan & William with their most important legal matters." },
      { property: "og:title", content: "Testimonials — Kaplan & William Law Firm" },
      { property: "og:description", content: "Real stories from clients who trusted Kaplan & William with their most important legal matters." },
      { property: "og:url", content: "https://kaplanwilliamlawfirm.com/testimonials" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Testimonials — Kaplan & William Law Firm" },
      { name: "twitter:description", content: "Real stories from clients who trusted Kaplan & William with their most important legal matters." },
    ],
    links: [{ rel: "canonical", href: "https://kaplanwilliamlawfirm.com/testimonials" }],
  }),
  component: TestimonialsPage,
});

const reviews = [
  { name: "Eleanor M.", matter: "Personal Injury", text: "They didn't just win my case — they restored my faith that the system can work for ordinary people." },
  { name: "Robert C.", matter: "Criminal Defense", text: "Sarah and her team saved my career and my freedom. Their preparation was extraordinary." },
  { name: "Priya R.", matter: "Family Law", text: "Compassionate, strategic and protective. Lena guided me through the hardest year of my life." },
  { name: "Michael T.", matter: "Corporate Law", text: "Outside general counsel that feels like an in-house team. We trust them with everything." },
  { name: "Diana K.", matter: "Estate Litigation", text: "I never thought we'd see a fair outcome. Kaplan & William made it happen — twice over." },
  { name: "Jonas W.", matter: "Immigration", text: "After two failed attorneys, this firm got my family our green cards within eight months." },
];

function Carousel() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);
  const r = reviews[i];
  return (
    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl bg-navy p-12 text-white">
      <Quote className="h-10 w-10 text-gold opacity-50" />
      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
          <div className="mt-4 flex gap-1">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}</div>
          <p className="mt-6 font-display text-2xl italic md:text-3xl">"{r.text}"</p>
          <p className="mt-8 text-sm uppercase tracking-widest text-gold">{r.name} — {r.matter}</p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex justify-between">
        <button onClick={prev} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition hover:border-gold hover:text-gold"><ChevronLeft className="h-5 w-5" /></button>
        <div className="flex items-center gap-2">{reviews.map((_, j) => <button key={j} onClick={() => setI(j)} className={`h-1.5 rounded-full transition-all ${i === j ? "w-8 bg-gold" : "w-2 bg-white/30"}`} />)}</div>
        <button onClick={next} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition hover:border-gold hover:text-gold"><ChevronRight className="h-5 w-5" /></button>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Client Voices" title="Stories of Trust" subtitle="The measure of a firm is how it's remembered after the verdict." />
      <section className="bg-background py-24"><div className="mx-auto max-w-7xl px-6"><Carousel /></div></section>
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl bg-card p-7 shadow-elegant">
                <div className="flex items-center gap-4">
                  <UploadableImage id={`review-${r.name}`} alt={r.name} aspect="aspect-square" rounded="rounded-full" className="w-16" />
                  <div>
                    <p className="font-display text-lg text-navy">{r.name}</p>
                    <p className="text-xs uppercase tracking-widest text-gold">{r.matter}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}</div>
                <p className="mt-4 text-sm text-muted-foreground">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
