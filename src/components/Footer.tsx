import { Link } from "@tanstack/react-router";
import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 text-white">
            <Scale className="h-6 w-6 text-gold" />
            <div className="font-display text-xl">Kaplan &amp; William</div>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">Justice. Integrity. Results. Over four decades of trusted legal counsel for individuals, families, and enterprises.</p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:border-gold hover:text-gold">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm uppercase tracking-widest text-gold">Practice</h4>
          <ul className="space-y-2 text-sm">
            {["Personal Injury", "Criminal Defense", "Family Law", "Corporate Law", "Immigration", "Bankruptcy"].map((s) => (
              <li key={s}><Link to="/practice-areas" className="hover:text-gold">{s}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm uppercase tracking-widest text-gold">Firm</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/attorneys" className="hover:text-gold">Our Attorneys</Link></li>
            <li><Link to="/case-results" className="hover:text-gold">Case Results</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Legal Insights</Link></li>
            <li><Link to="/testimonials" className="hover:text-gold">Testimonials</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm uppercase tracking-widest text-gold">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold" /> 10880 Wilshire Blvd, Suite 900<br />Los Angeles, CA 90024</li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold" /> 150 King St W, Suite 2000<br />Toronto, ON M5H 1J9, Canada</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-gold" /> +1 (760) 393-4317</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-gold" /> info@kaplanwilliamlawfirm.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Kaplan &amp; William Law Firm. All rights reserved.</p>
          <p>Attorney Advertising. Prior results do not guarantee similar outcomes.</p>
        </div>
      </div>
    </footer>
  );
}
