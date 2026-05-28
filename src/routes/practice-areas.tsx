import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { UploadableImage } from "@/components/UploadableImage";
import { Heart, Car, Gavel, Users, Briefcase, Globe, Landmark, FileText, Handshake, ArrowRight } from "lucide-react";
import { practiceImages } from "@/lib/practice-images";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Kaplan & William Law Firm" },
      { name: "description", content: "Personal injury, criminal defense, family, corporate, immigration, bankruptcy, inheritance and consignment law representation." },
      { property: "og:title", content: "Practice Areas — Kaplan & William Law Firm" },
      { property: "og:description", content: "Personal injury, criminal defense, family, corporate, immigration, bankruptcy, inheritance and consignment law representation." },
      { property: "og:url", content: "https://kaplanwilliamlawfirm.com/practice-areas" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Practice Areas — Kaplan & William Law Firm" },
      { name: "twitter:description", content: "Personal injury, criminal defense, family, corporate, immigration, bankruptcy, inheritance and consignment law representation." },
    ],
    links: [{ rel: "canonical", href: "https://kaplanwilliamlawfirm.com/practice-areas" }],
  }),
  component: PracticeAreasPage,
});

const areas = [
  { icon: Heart, title: "Personal Injury", desc: "Compensation for medical bills, lost wages and pain caused by negligence — from slip-and-falls to catastrophic injuries." },
  { icon: Car, title: "Car Accidents", desc: "Auto, truck, motorcycle and pedestrian collision claims with proven settlement leverage against major insurers." },
  { icon: Gavel, title: "Criminal Defense", desc: "Misdemeanor, felony and federal defense — from arraignment to acquittal — across state and federal courts." },
  { icon: Users, title: "Family Law", desc: "Divorce, custody, support and adoption matters handled with discretion, dignity and a focus on long-term outcomes." },
  { icon: Briefcase, title: "Corporate Law", desc: "Entity formation, commercial contracts, M&A and outside general counsel services for growing businesses." },
  { icon: Globe, title: "Immigration Law", desc: "Family and employment visas, green cards, citizenship, asylum and deportation defense." },
  { icon: Landmark, title: "Inheritance Claim", desc: "Will contests, estate litigation, trustee disputes and rightful inheritance recovery for heirs." },
  { icon: FileText, title: "Bankruptcy", desc: "Chapter 7, 11 and 13 representation for individuals, families and businesses seeking a financial reset." },
  { icon: Handshake, title: "Consignment", desc: "Commercial consignment agreements, disputes and recovery actions for merchants and consignors." },
];

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero eyebrow="Practice Areas" title="Counsel Across the Matters That Matter" subtitle="Deep bench expertise across litigation, transactional and regulatory practice — under one roof." />
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-elegant">
                <UploadableImage id={`pa-page-${a.title}`} alt={a.title} aspect="aspect-[16/10]" rounded="rounded-none" defaultSrc={practiceImages[a.title]} />
                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-lg bg-navy text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl text-navy">{a.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.desc}</p>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy transition group-hover:text-gold">
                    Discuss your case <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
