import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const features = [
  "Quality consultants cleared by our technical recruiting team",
  "Virtual Availability List with diverse skill sets",
  "Rapid placement — consultants available ASAP",
  "Commercial, Government & Non-Profit expertise",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Trusted IT Staffing Partner for{" "}
              <span className="text-gradient">Global Organizations</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              SrivenPros is a premier IT staffing company providing quality
              consultants across all areas of technology. Our diverse clientele
              benefits from tailored solutions that address unique challenges
              and drive growth across multiple regions worldwide.
            </p>
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutTeam}
                alt="Diverse SrivenPros team collaborating in modern office"
                className="w-full h-80 md:h-[28rem] object-cover"
                width={1024}
                height={768}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-6 shadow-elevated hidden md:block">
              <p className="text-3xl font-bold text-primary-foreground">10+</p>
              <p className="text-sm text-primary-foreground/70">Years Delivering Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
