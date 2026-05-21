import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { UploadableImage } from "@/components/UploadableImage";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Legal Insights & Blog — Kaplan & William Law Firm" },
      { name: "description", content: "Practical legal insights, case commentary and guidance from the attorneys at Kaplan & William." },
    ],
  }),
  component: BlogPage,
});

const categories = ["All", "Personal Injury", "Criminal Defense", "Family Law", "Corporate", "Estate"];

const posts = [
  { tag: "Personal Injury", title: "What to Do in the First 48 Hours After an Accident", excerpt: "The decisions you make immediately after a collision can shape your case for years. Here is the playbook.", date: "May 14, 2026", read: "6 min read", featured: true },
  { tag: "Criminal Defense", title: "Your Rights During a Federal Investigation", excerpt: "What to say — and what never to say — if federal agents approach you at work or at home.", date: "May 02, 2026", read: "8 min read" },
  { tag: "Estate", title: "Contesting a Will: A Practical Guide for Heirs", excerpt: "Standing, deadlines and the burden of proof in inheritance disputes.", date: "Apr 21, 2026", read: "7 min read" },
  { tag: "Family Law", title: "Custody Modifications: When Circumstances Change", excerpt: "How to seek a modification when relocation, remarriage or income changes everything.", date: "Apr 10, 2026", read: "5 min read" },
  { tag: "Corporate", title: "Founder Vesting and Why It Matters", excerpt: "The single clause that prevents most early-stage equity disputes.", date: "Mar 28, 2026", read: "4 min read" },
  { tag: "Personal Injury", title: "Slip-and-Fall Claims in Commercial Spaces", excerpt: "Notice, duty and the surveillance footage you need within 72 hours.", date: "Mar 12, 2026", read: "6 min read" },
];

export default function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = posts.filter((p) => (cat === "All" || p.tag === cat) && p.title.toLowerCase().includes(q.toLowerCase()));
  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      <PageHero eyebrow="Insights" title="Legal Insights from the Bench" subtitle="Clear, practical commentary from our practicing attorneys." />
      <section className="bg-background py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-2 text-sm transition ${cat === c ? "border-gold bg-gold text-navy-deep" : "border-border hover:border-gold"}`}>{c}</button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles…" className="w-full rounded-full border bg-card py-2.5 pl-10 pr-4 text-sm outline-none focus:border-gold sm:w-72" />
            </div>
          </div>
        </div>
      </section>

      {featured && (
        <section className="bg-background pb-12">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
            <UploadableImage id={`blog-feat-${featured.title}`} alt={featured.title} aspect="aspect-[4/3]" />
            <div>
              <p className="text-xs uppercase tracking-widest text-gold">Featured · {featured.tag}</p>
              <h2 className="mt-3 font-display text-4xl text-navy">{featured.title}</h2>
              <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
              <p className="mt-4 text-xs text-muted-foreground">{featured.date} · {featured.read}</p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold hover:text-navy-deep">Read article <ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
        </section>
      )}

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article key={p.title} className="group overflow-hidden rounded-2xl bg-card shadow-elegant transition hover:-translate-y-1">
                <UploadableImage id={`blog-${p.title}`} alt={p.title} aspect="aspect-[16/10]" rounded="rounded-none" />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-gold">{p.tag}</p>
                  <h3 className="mt-3 font-display text-xl text-navy transition group-hover:text-gold">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">{p.date} · {p.read}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
