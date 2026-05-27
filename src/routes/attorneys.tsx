import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { UploadableImage } from "@/components/UploadableImage";
import { GraduationCap, Award, Scale, Briefcase } from "lucide-react";

export const Route = createFileRoute("/attorneys")({
  head: () => ({
    meta: [
      { title: "Our Attorneys — Kaplan & William Law Firm" },
      { name: "description", content: "Meet the trial lawyers, partners and associates at Kaplan & William — a team built for results." },
    ],
  }),
  component: AttorneysPage,
});

const attorneys = [
  { name: "Daniel Kaplan", role: "Founding Partner", focus: "Personal Injury, Mass Torts", education: "Harvard Law School, J.D. 1980", admissions: "NY, NJ, US Supreme Court", awards: "Super Lawyers Top 100 (2018–2025)", years: "44 yrs" },
  { name: "Sarah William", role: "Managing Partner", focus: "Criminal Defense, White Collar", education: "Yale Law School, J.D. 1995", admissions: "NY, CA, Federal Districts", awards: "Best Lawyers in America (2017–2025)", years: "29 yrs" },
  { name: "Marcus Rhodes", role: "Senior Trial Attorney", focus: "Car Accidents, Wrongful Death", education: "Columbia Law School, J.D. 2003", admissions: "NY, FL", awards: "Trial Lawyer of the Year — NYSBA 2022", years: "21 yrs" },
  { name: "Priya Anand", role: "Partner", focus: "Corporate, M&A", education: "Stanford Law School, J.D. 2008", admissions: "NY, CA", awards: "Chambers USA — Ranked Lawyer", years: "16 yrs" },
  { name: "James Okafor", role: "Partner", focus: "Federal Criminal Defense", education: "NYU Law, J.D. 2005", admissions: "NY, NJ, DC, Federal", awards: "Former AUSA, SDNY", years: "19 yrs" },
  { name: "Greg Brown", role: "Partner", focus: "Family Law, Estates", education: "Georgetown Law, J.D. 2007", admissions: "CA, ON", awards: "Top 40 Under 40 — National Law Journal 2024", years: "17 yrs" },
];

export default function AttorneysPage() {
  return (
    <>
      <PageHero eyebrow="Our Attorneys" title="Trial Lawyers. Trusted Advisors." subtitle="A senior bench of attorneys who try cases — not just settle them." />
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          {attorneys.map((a) => (
            <article key={a.name} className="grid gap-6 rounded-2xl border bg-card p-6 shadow-elegant md:grid-cols-[200px_1fr]">
              <UploadableImage id={`attorney-${a.name}`} alt={a.name} aspect="aspect-[3/4]" />
              <div>
                <h3 className="font-display text-2xl text-navy">{a.name}</h3>
                <p className="text-sm uppercase tracking-widest text-gold">{a.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{a.focus}</p>
                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex gap-3"><GraduationCap className="h-4 w-4 shrink-0 text-gold" /><div><dt className="font-semibold text-navy">Education</dt><dd className="text-muted-foreground">{a.education}</dd></div></div>
                  <div className="flex gap-3"><Scale className="h-4 w-4 shrink-0 text-gold" /><div><dt className="font-semibold text-navy">Admissions</dt><dd className="text-muted-foreground">{a.admissions}</dd></div></div>
                  <div className="flex gap-3"><Award className="h-4 w-4 shrink-0 text-gold" /><div><dt className="font-semibold text-navy">Awards</dt><dd className="text-muted-foreground">{a.awards}</dd></div></div>
                  <div className="flex gap-3"><Briefcase className="h-4 w-4 shrink-0 text-gold" /><div><dt className="font-semibold text-navy">Experience</dt><dd className="text-muted-foreground">{a.years}</dd></div></div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
