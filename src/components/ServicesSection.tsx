import { motion } from "framer-motion";
import { Users, Briefcase, Code, Monitor, Database, Cloud } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Staff Augmentation",
    description:
      "Scale your team with pre-vetted IT professionals who integrate seamlessly into your existing workflows and culture.",
  },
  {
    icon: Briefcase,
    title: "Practice Development",
    description:
      "Build and grow your technology practice with strategic staffing and consulting tailored to your organizational goals.",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Access skilled developers across full-stack, frontend, backend, and mobile development for your critical projects.",
  },
  {
    icon: Monitor,
    title: "Quality Assurance",
    description:
      "Ensure product excellence with experienced QA engineers specializing in manual and automated testing methodologies.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Leverage data-driven decisions with consultants expert in data engineering, business intelligence, and analytics.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Modernize your infrastructure with cloud architects and DevOps engineers across AWS, Azure, and GCP platforms.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT staffing solutions designed to meet the evolving needs
            of modern enterprises.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl bg-card p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-accent/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <s.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
