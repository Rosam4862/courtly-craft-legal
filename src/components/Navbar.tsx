import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Scale } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/attorneys", label: "Attorneys" },
  { to: "/case-results", label: "Case Results" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-dark border-b border-white/10 py-3" : "py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-white">
          <Scale className="h-6 w-6 text-gold" />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide">Kaplan &amp; William</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Law Firm</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-white/80 transition hover:text-gold"
              activeProps={{ className: "text-gold" }} activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition hover:shadow-gold lg:inline-block">
          Free Consultation
        </Link>
        <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="glass-dark mt-3 border-t border-white/10 lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/5">{l.label}</Link>
            ))}
            <Link to="/contact" className="mt-2 rounded-full bg-gold px-5 py-2.5 text-center font-semibold text-navy-deep">Free Consultation</Link>
          </div>
        </div>
      )}
    </header>
  );
}
