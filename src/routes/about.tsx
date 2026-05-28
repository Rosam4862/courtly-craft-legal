import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { UploadableImage } from "@/components/UploadableImage";
import { teamImages, brandLogo } from "@/lib/team-images";
import { Shield, Heart, Scale, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Kaplan & William Law Firm" },
      { name: "description", content: "Four decades of advocacy. Learn about the people, values and history that define Kaplan & William." },
      { property: "og:title", content: "About Us — Kaplan & William Law Firm" },
      { property: "og:description", content: "Four decades of advocacy. Learn about the people, values and history that define Kaplan & William." },
      { property: "og:url", content: "https://kaplanwilliamlawfirm.com/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Us — Kaplan & William Law Firm" },
      { name: "twitter:description", content: "Four decades of advocacy. Learn about the people, values and history that define Kaplan & William." },,
    ],
    links: [{ rel: "canonical", href: "https://kaplanwilliamlawfirm.com/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Shield, title: "Integrity", desc: "We do the right thing — when it's easy and when it isn't." },
  { icon: Heart, title: "Compassion", desc: "Behind every case is a person whose life we treat with care." },
  { icon: Scale, title: "Excellence", desc: "Meticulous preparation. Relentless advocacy. Measurable results." },
  { icon: Award, title: "Accountability", desc: "Direct attorney access and transparent communication, always." },
];

const timeline = [
  { year: "1983", title: "Firm Founded", desc: "Daniel Kaplan opens a one-room practice on Madison Avenue." },
  { year: "1997", title: "Partnership Formed", desc: "Sarah William joins as managing partner; firm expands to litigation." },
  { year: "2008", title: "$50M Verdict", desc: "Record class-action verdict in a landmark consumer protection case." },
  { year: "2015", title: "National Recognition", desc: "Named to U.S. News Best Law Firms list — Tier 1." },
  { year: "2024", title: "Today", desc: "60 attorneys, four practice groups, offices in California and Toronto." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About the Firm" title="Built on Forty Years of Trust" subtitle="From a single Madison Avenue office to one of the most respected practices in the country." />

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <UploadableImage id="about-story" alt="Our Story" aspect="aspect-[4/5]" defaultSrc={brandLogo} />
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">Our Story</p>
            <h2 className="font-display text-4xl text-navy">A Firm Defined by the Clients We Serve</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>Kaplan &amp; William began with a simple conviction: that excellent legal representation should never be reserved for the powerful. Forty years later, that conviction still drives every brief we file and every cross-examination we deliver.</p>
              <p>Today our attorneys come from clerkships at the Supreme Court, partnerships at international firms, and decorated careers in federal prosecution. They all share one trait — they chose us because they wanted to fight for clients, not billable hours.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">Mission &amp; Values</p>
            <h2 className="font-display text-4xl text-navy">What We Stand For</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="rounded-2xl bg-card p-8 shadow-elegant">
                  <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-lg bg-navy text-gold"><Icon className="h-6 w-6" /></div>
                  <h3 className="font-display text-2xl text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">Our Team</p>
            <h2 className="font-display text-4xl text-navy">Leadership</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "Daniel Kaplan", role: "Founding Partner" },
              { name: "Sarah William", role: "Managing Partner" },
              { name: "Marcus Rhodes", role: "Senior Trial Attorney" },
              { name: "Priya Anand", role: "Partner, Corporate" },
              { name: "James Okafor", role: "Partner, Criminal Defense" },
              { name: "Greg Brown", role: "Partner, Family Law" },
            ].map((m) => (
              <div key={m.name} className="overflow-hidden rounded-2xl bg-card shadow-elegant">
                <UploadableImage id={`team-${m.name}`} alt={m.name} aspect="aspect-[3/4]" rounded="rounded-none" defaultSrc={teamImages[m.name]} />
                <div className="p-6">
                  <h3 className="font-display text-xl text-navy">{m.name}</h3>
                  <p className="text-sm uppercase tracking-widest text-gold">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-navy py-24 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">Our History</p>
            <h2 className="font-display text-4xl">Four Decades of Advocacy</h2>
          </div>
          <div className="relative space-y-10 border-l border-white/20 pl-8">
            {timeline.map((t, i) => (
              <motion.div key={t.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
                <div className="absolute -left-[42px] grid h-5 w-5 place-items-center rounded-full bg-gold ring-4 ring-navy-deep" />
                <p className="font-display text-3xl text-gold">{t.year}</p>
                <h3 className="mt-1 font-display text-xl">{t.title}</h3>
                <p className="mt-1 text-white/70">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
