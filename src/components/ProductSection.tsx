import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Network,
  GitBranch,
  LayoutDashboard,
  Brain,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Automated Access Lifecycle",
    description:
      "Eliminate manual effort with smart role recommendations and zero-touch provisioning — from onboarding to offboarding.",
  },
  {
    icon: ShieldCheck,
    title: "Real-Time Risk Mitigation",
    description:
      "Prevent security issues before they occur. Automated risk checks run before any access is ever granted.",
  },
  {
    icon: Network,
    title: "Seamless Enterprise Integration",
    description:
      "Works instantly across your entire SAP and non-SAP landscape — no rip-and-replace required.",
  },
  {
    icon: GitBranch,
    title: "Intelligent SoD Control",
    description:
      "Proactively eliminate Segregation of Duties conflicts. AIMS targets zero critical SoD risks — and delivers on it.",
  },
  {
    icon: LayoutDashboard,
    title: "Unified Governance Dashboard",
    description:
      "Simplified compliance reporting with automated audit trails and full visibility from a single console.",
  },
  {
    icon: Brain,
    title: "Role Intelligence Engine",
    description:
      "Smart recommendations powered by real access behavior data — continuously optimizing role assignments.",
  },
];

const impact = [
  { value: "70%", label: "Faster Provisioning" },
  { value: "50%", label: "Less Audit Effort" },
  { value: "0", label: "Critical SoD Risks" },
  { value: "SOC 2", label: "Type II Certified" },
];

const whyUs = [
  "Official Authorized Reseller of AIMS by TLT-INC",
  "Built by certified SAP security & IAM practitioners",
  "End-to-end delivery: pre-sales, implementation & 24/7 support",
  "Go live in weeks, not months — flexible to your business",
];

const ProductSection = () => {
  return (
    <section id="product" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Our Product · Official Authorized Reseller
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
            AIMS by TLT-INC —{" "}
            <span className="text-gradient">Intelligent Access & Identity Management for SAP</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            SrivenPros brings you AIMS, the next-generation Access and Identity
            Management Suite that automates the access lifecycle, eliminates SoD
            conflicts, and delivers enterprise-grade compliance at speed —
            backed by our full implementation and support.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 rounded-2xl bg-hero-gradient p-8 shadow-elevated"
        >
          {impact.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {s.value}
              </p>
              <p className="text-xs md:text-sm text-primary-foreground/70 uppercase tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-xl bg-card p-7 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-accent/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <f.icon size={22} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why SrivenPros + CTA */}
        <div className="grid md:grid-cols-2 gap-10 items-center rounded-2xl border border-border/60 bg-subtle-gradient p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
              Why SrivenPros
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-5 leading-tight">
              More Than a Reseller — Your Trusted AIMS Partner
            </h3>
            <ul className="space-y-3">
              {whyUs.map((w) => (
                <li key={w} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{w}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl bg-card p-8 shadow-elevated border border-border/50"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Request a Live Demo
            </p>
            <h4 className="text-xl font-bold text-foreground mb-3">
              See AIMS in your SAP environment
            </h4>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Get a personalized 20-minute walkthrough with our certified
              experts. Zero obligation, zero pressure.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105"
            >
              Request a Demo
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
