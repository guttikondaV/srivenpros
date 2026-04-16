import { motion } from "framer-motion";

import graingerLogo from "@/assets/clients/grainger.png";
import ultaLogo from "@/assets/clients/ulta.png";
import mercedesLogo from "@/assets/clients/mercedes.png";
import randstadLogo from "@/assets/clients/randstad.png";
import hclLogo from "@/assets/clients/hcl.png";
import nisumLogo from "@/assets/clients/nisum.png";
import delekLogo from "@/assets/clients/delek.png";
import pbsLogo from "@/assets/clients/pbs.png";
import eallianceLogo from "@/assets/clients/ealliance.png";

const clients = [
  { name: "Grainger", logo: graingerLogo },
  { name: "Ulta Beauty", logo: ultaLogo },
  { name: "Mercedes Benz", logo: mercedesLogo },
  { name: "Randstad Global", logo: randstadLogo },
  { name: "HCL", logo: hclLogo },
  { name: "Nisum Corporation", logo: nisumLogo },
  { name: "Delek", logo: delekLogo },
  { name: "Premium Brand Services", logo: pbsLogo },
  { name: "eAlliance", logo: eallianceLogo },
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
            Partnering with industry leaders to deliver IT, AI, and ML talent
            across commercial and non-profit sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center justify-center rounded-xl bg-card border border-border/60 py-8 px-6 shadow-card hover:shadow-elevated hover:border-accent/30 transition-all gap-4"
            >
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                className="h-16 w-auto object-contain"
                loading="lazy"
              />
              <span className="text-sm font-semibold text-foreground tracking-wide text-center">
                {c.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
