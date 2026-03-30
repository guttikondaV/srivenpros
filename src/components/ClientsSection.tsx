import { motion } from "framer-motion";

const clients = [
  "Grainger",
  "Ulta Inc",
  "Mercedes Benz",
  "Randstad",
  "HCL",
  "Nisum Corporation",
  "Delek",
  "Premium Brand Services",
  "eAlliance",
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-24 md:py-32 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            Trusted By
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Clients
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Partnering with industry leaders across commercial, government, and
            non-profit sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center justify-center rounded-xl bg-card border border-border/60 py-6 px-4 shadow-card hover:shadow-elevated hover:border-accent/30 transition-all"
            >
              <span className="text-sm font-semibold text-foreground tracking-wide text-center">
                {c}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
