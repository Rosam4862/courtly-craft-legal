import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-navy-deep shadow-gold transition hover:scale-105"
    >
      <MessageCircle className="h-4 w-4" />
      Free Consultation
    </Link>
  );
}
