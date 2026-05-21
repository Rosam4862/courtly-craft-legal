import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kaplan & William Law Firm" },
      { name: "description", content: "Schedule a free, confidential consultation. Available 24/7 for emergency matters." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Phone required").max(30),
  matter: z.string().min(1, "Please select a matter"),
  message: z.string().trim().min(10, "Please describe your matter").max(2000),
});

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Speak With a Senior Attorney" subtitle="Free, confidential consultations. We respond within one business hour." />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-2xl border bg-card p-8 shadow-elegant md:p-10">
            <h2 className="font-display text-3xl text-navy">Request a Consultation</h2>
            <p className="mt-2 text-sm text-muted-foreground">All inquiries are confidential and protected by attorney-client privilege.</p>
            {sent ? (
              <div className="mt-10 rounded-xl bg-secondary p-8 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-gold" />
                <p className="mt-4 font-display text-2xl text-navy">Thank you.</p>
                <p className="mt-2 text-sm text-muted-foreground">A member of our intake team will reach out within the hour.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  { name: "name", label: "Full Name", type: "text" },
                  { name: "email", label: "Email Address", type: "email" },
                  { name: "phone", label: "Phone Number", type: "tel" },
                ].map((f) => (
                  <div key={f.name} className={f.name === "phone" ? "" : ""}>
                    <label className="text-xs font-semibold uppercase tracking-widest text-navy">{f.label}</label>
                    <input name={f.name} type={f.type} className="mt-2 w-full rounded-lg border bg-background px-4 py-3 outline-none focus:border-gold" />
                    {errors[f.name] && <p className="mt-1 flex items-center gap-1 text-xs text-destructive"><AlertCircle className="h-3 w-3" />{errors[f.name]}</p>}
                  </div>
                ))}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-navy">Legal Matter</label>
                  <select name="matter" className="mt-2 w-full rounded-lg border bg-background px-4 py-3 outline-none focus:border-gold">
                    <option value="">Select...</option>
                    {["Personal Injury", "Criminal Defense", "Family Law", "Corporate", "Immigration", "Bankruptcy", "Inheritance", "Other"].map(o => <option key={o}>{o}</option>)}
                  </select>
                  {errors.matter && <p className="mt-1 text-xs text-destructive">{errors.matter}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-navy">Briefly Describe Your Matter</label>
                  <textarea name="message" rows={5} className="mt-2 w-full rounded-lg border bg-background px-4 py-3 outline-none focus:border-gold" />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <button type="submit" className="rounded-full bg-gradient-gold px-7 py-3.5 font-semibold text-navy-deep shadow-gold transition hover:scale-[1.02] sm:col-span-2">
                  Send Confidential Inquiry
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-navy p-8 text-white shadow-elegant">
              <h3 className="font-display text-2xl">Contact Information</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-gold" /> 488 Madison Avenue, Suite 1800<br />New York, NY 10022</li>
                <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-gold" /> (212) 555-0140</li>
                <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-gold" /> info@kaplanwilliam.com</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-card p-8 shadow-elegant">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold" />
                <h3 className="font-display text-xl text-navy">Office Hours</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between"><span>Mon – Fri</span><span>8:00am – 7:00pm</span></li>
                <li className="flex justify-between"><span>Saturday</span><span>9:00am – 2:00pm</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>Emergency only</span></li>
              </ul>
            </div>
            <a href="tel:+12125550140" className="block rounded-2xl bg-gradient-gold p-8 text-navy-deep shadow-gold transition hover:scale-[1.02]">
              <p className="text-xs font-semibold uppercase tracking-widest">24/7 Emergency Line</p>
              <p className="mt-2 font-display text-3xl">(212) 555-0140</p>
              <p className="mt-1 text-sm">Arrested, injured or facing an urgent matter? Call now.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-secondary pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border shadow-elegant">
            <iframe
              title="Office location"
              src="https://www.google.com/maps?q=488+Madison+Avenue,+New+York,+NY&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
