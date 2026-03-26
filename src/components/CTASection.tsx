import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-hero-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Big Ideas,{" "}
            <span className="text-gradient">Real Impact.</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Ready to find the right IT talent for your organization? Let's
            discuss how SrivenPros can help you build a world-class technology
            team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@srivenpros.com"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105"
            >
              Contact Us
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Call Us Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
