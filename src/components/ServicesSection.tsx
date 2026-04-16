import { motion } from "framer-motion";
import { Users, Brain, Code, Bot, Database, Cloud } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "IT & AI Staff Augmentation",
    description:
      "Scale your teams with pre-vetted IT, AI, and ML professionals who integrate seamlessly into your workflows and culture.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Engage ML engineers, data scientists, and applied researchers to design, train, and deploy production-grade AI models.",
  },
  {
    icon: Code,
    title: "Software & GenAI Development",
    description:
      "Access full-stack engineers and Generative AI specialists building LLM-powered apps, copilots, and intelligent automation.",
  },
  {
    icon: Bot,
    title: "MLOps & AI Quality",
    description:
      "Operationalize AI with experts in MLOps, model monitoring, evaluation, and responsible-AI quality assurance.",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description:
      "Turn data into decisions with engineers skilled in modern data platforms, vector databases, BI, and analytics.",
  },
  {
    icon: Cloud,
    title: "Cloud & AI Infrastructure",
    description:
      "Modernize infrastructure with architects experienced in AWS, Azure, GCP, and GPU/AI platform engineering.",
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
            End-to-end IT, AI, and Machine Learning talent solutions designed to
            meet the evolving needs of modern, AI-first enterprises.
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
