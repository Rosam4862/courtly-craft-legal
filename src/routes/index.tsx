import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, Award, Users, Scale, Car, Heart, Briefcase, Globe, Landmark, FileText, Handshake, Gavel, Star, CheckCircle2 } from "lucide-react";
import { UploadableImage } from "@/components/UploadableImage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaplan & William Law Firm — Experienced Attorneys Fighting For Your Rights" },
      { name: "description", content: "Top-rated personal injury, criminal defense, family, corporate and immigration lawyers. Free consultation. Over $500M recovered for clients." },
    ],
  }),
  component: HomePage,
});

const practiceAreas = [
  { icon: Heart, title: "Personal Injury", desc: "Recover full compensation for injuries caused by another's negligence." },
  { icon: Car, title: "Car Accidents", desc: "Aggressive representation for victims of auto, truck and motorcycle crashes." },
  { icon: Gavel, title: "Criminal Defense", desc: "Strategic defense against misdemeanors, felonies and federal charges." },
  { icon: Users, title: "Family Law", desc: "Divorce, custody and adoption handled with discretion and care." },
  { icon: Briefcase, title: "Corporate Law", desc: "Formation, contracts, M&A and counsel for growing enterprises." },
  { icon: Globe, title: "Immigration Law", desc: "Visas, green cards, citizenship and deportation defense." },
  { icon: Landmark, title: "Inheritance Claim", desc: "Estate disputes, probate litigation and rightful inheritance recovery." },
  { icon: FileText, title: "Bankruptcy", desc: "Chapter 7, 11 and 13 filings for a true financial fresh start." },
  { icon: Handshake, title: "Consignment", desc: "Commercial consignment agreements and dispute resolution." },
];

const insights = [
  { tag: "Personal Injury", title: "What to Do in the First 48 Hours After an Accident", date: "May 14, 2026" },
  { tag: "Criminal Defense", title: "Your Rights During a Federal Investigation", date: "May 02, 2026" },
  { tag: "Estate Law", title: "Contesting a Will: A Practical Guide for Heirs", date: "Apr 21, 2026" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100vh] overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0">
          <UploadableImage id="hero" alt="Hero Background" aspect="aspect-auto" rounded="rounded-none" className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        </div>
        <div className="relative mx-auto flex min-h-[100vh] max-w-7xl flex-col justify-center px-6 pt-28">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-xs uppercase tracking-[0.5em] text-gold">Justice. Integrity. Results.</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Experienced Attorneys <span className="text-gradient-gold italic">Fighting</span> For Your Rights
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 max-w-2xl text-lg text-white/75">
            For over four decades, Kaplan &amp; William has stood beside clients in the courtroom and at the negotiating table — delivering verdicts and settlements that change lives.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 font-semibold text-navy-deep shadow-gold transition hover:scale-105">
              Free Consultation <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <a href="tel:+12125550140" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:border-gold hover:text-gold">
              <Phone className="h-4 w-4" /> Call Now: (212) 555-0140
            </a>
          </motion.div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="border-b bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-4">
          {[
            { value: "40+", label: "Years of Experience" },
            { value: "5,200+", label: "Successful Cases" },
            { value: "$500M+", label: "Recovered for Clients" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-l-2 border-gold pl-5">
              <div className="font-display text-5xl text-navy">{s.value}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl">Areas of Practice</h2>
            <p className="mt-4 text-muted-foreground">Comprehensive legal representation across the matters that affect your life, family and business.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="group overflow-hidden rounded-2xl bg-card shadow-elegant transition hover:-translate-y-2">
                  <UploadableImage id={`pa-${p.title}`} alt={p.title} aspect="aspect-[16/10]" rounded="rounded-none" />
                  <div className="p-7">
                    <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-lg bg-navy text-gold">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-2xl text-navy">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    <Link to="/practice-areas" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy transition group-hover:text-gold">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">Why Choose Us</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy">A Legacy Built on Trust and Verdicts</h2>
            <p className="mt-6 text-muted-foreground">Our attorneys have argued before the U.S. Supreme Court, secured multimillion-dollar verdicts, and represented Fortune 500 companies. But what defines us is how we treat the person sitting across the table.</p>
            <ul className="mt-8 space-y-4">
              {[
                "Direct attorney access — no junior associate handoffs",
                "No-fee guarantee on injury matters unless we win",
                "Multilingual team: English, Spanish, Mandarin, Hebrew",
                "Available 24/7 for emergency consultations",
              ].map((item) => (
                <li key={item} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-gold" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <UploadableImage id="why-us" alt="Our Team" aspect="aspect-[4/5]" />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-navy p-6 text-white shadow-elegant md:block">
              <Award className="h-8 w-8 text-gold" />
              <p className="mt-3 font-display text-xl">Super Lawyers®</p>
              <p className="text-sm text-white/70">Top 100 — 2023, 2024, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* ATTORNEY SPOTLIGHT */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">Our Attorneys</p>
              <h2 className="font-display text-4xl md:text-5xl text-navy">Meet the Counsel</h2>
            </div>
            <Link to="/attorneys" className="inline-flex items-center gap-2 font-semibold text-navy hover:text-gold">View all attorneys <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "Daniel Kaplan", role: "Founding Partner" },
              { name: "Sarah William", role: "Managing Partner" },
              { name: "Marcus Rhodes", role: "Senior Trial Attorney" },
            ].map((a) => (
              <div key={a.name} className="group overflow-hidden rounded-2xl bg-card shadow-elegant">
                <UploadableImage id={`att-spot-${a.name}`} alt={a.name} aspect="aspect-[3/4]" rounded="rounded-none" />
                <div className="p-6">
                  <h3 className="font-display text-2xl text-navy">{a.name}</h3>
                  <p className="text-sm uppercase tracking-widest text-gold">{a.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative bg-gradient-navy py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Scale className="mx-auto h-10 w-10 text-gold" />
          <div className="mt-6 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-gold text-gold" />)}
          </div>
          <p className="mt-8 font-display text-3xl italic leading-relaxed md:text-4xl">
            "They didn't just win my case — they restored my faith that the system can work for ordinary people. Daniel and his team were extraordinary."
          </p>
          <p className="mt-8 text-sm uppercase tracking-widest text-gold">Eleanor M. — Personal Injury Client</p>
          <Link to="/testimonials" className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:border-gold hover:text-gold">
            Read More Stories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">Insights</p>
              <h2 className="font-display text-4xl md:text-5xl text-navy">Recent Legal Insights</h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-navy hover:text-gold">All articles <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {insights.map((post) => (
              <article key={post.title} className="group overflow-hidden rounded-2xl border bg-card transition hover:shadow-elegant">
                <UploadableImage id={`blog-${post.title}`} alt={post.title} aspect="aspect-[16/10]" rounded="rounded-none" />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-gold">{post.tag}</p>
                  <h3 className="mt-3 font-display text-xl text-navy transition group-hover:text-gold">{post.title}</h3>
                  <p className="mt-3 text-xs text-muted-foreground">{post.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at center, var(--gold), transparent 60%)" }} />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Ready to Discuss Your Case?</h2>
            <p className="mt-4 max-w-2xl text-white/70">Speak directly with a senior attorney. Consultations are free, confidential, and obligation-free.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="rounded-full bg-gradient-gold px-7 py-4 font-semibold text-navy-deep shadow-gold transition hover:scale-105">Book Consultation</Link>
            <a href="tel:+12125550140" className="rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:border-gold hover:text-gold">Call (212) 555-0140</a>
          </div>
        </div>
      </section>
    </>
  );
}
