import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/srivenpros-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="SrivenPros logo" className="h-12 w-auto brightness-0 invert" />
              <h3
                className="text-xl font-bold text-primary-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                SRIVEN<span className="text-gradient">PROS</span>
              </h3>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-md">
              SrivenPros is a premier talent partner delivering IT, Artificial
              Intelligence, Machine Learning, and Cybersecurity consultants to
              commercial and non-profit organizations building secure, intelligent businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["About", "Services", "Values", "Clients", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                <a
                  href="mailto:info@srivenpros.com"
                  className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                >
                  info@srivenpros.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/50">
                  (630) 635-0553 ext. 101
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/50">
                  MOI Business Suites, 776 Illinois Route 59, Suite 191-K, Naperville, IL
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} SrivenPros. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
