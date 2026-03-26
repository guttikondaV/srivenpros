import { motion } from "framer-motion";
import { Heart, Target, Award, Handshake, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Customer Focus",
    description:
      "We prioritize understanding our clients' specific IT staffing needs, ensuring we match the right talent with the right role.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Our rigorous screening process ensures only the best candidates are selected, delivering high-quality IT professionals.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Built on trust, transparency, and accountability — we uphold the highest ethical standards in every interaction.",
  },
  {
    icon: Handshake,
    title: "Teamwork",
    description:
      "We work closely with clients and candidates to create effective, seamlessly integrated staffing solutions.",
  },
  {
    icon: Rocket,
    title: "Excellence",
    description:
      "Through continuous improvement, we ensure our staffing solutions are always a step ahead in meeting your IT talent needs.",
  },
];

const ValuesSection = () => {
  return (
    <section id="values" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every decision, every placement, and every
            relationship we build.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center p-6"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <v.icon size={24} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
