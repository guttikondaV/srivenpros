import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-diverse-team.jpg";

const features = [
  "AI/ML engineers and IT consultants vetted by our technical recruiting team",
  "Curated availability list spanning data science, MLOps, and full-stack skills",
  "Rapid placement — specialized consultants available on demand",
  "Commercial, Non-Profit & Enterprise AI transformation expertise",
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
              Trusted IT, AI & ML Talent Partner for{" "}
              <span className="text-gradient">Modern Enterprises</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              SrivenPros is a premier talent partner specializing in IT, Artificial
              Intelligence, and Machine Learning consulting. We deliver
              high-caliber experts who help organizations build, scale, and
              operationalize intelligent systems — driving measurable outcomes
              across commercial and non-profit sectors.
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
                src={aboutImage}
                alt="Diverse SrivenPros team collaborating in a modern office"
                className="w-full h-80 md:h-[28rem] object-cover"
                loading="lazy"
                width={1024}
                height={768}
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
