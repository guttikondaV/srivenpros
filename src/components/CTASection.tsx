import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send, Mail, Phone, MapPin } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(100, "Company must be under 100 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const CTASection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    // Simulate sending — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setForm({ name: "", email: "", company: "", message: "" });
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
  };

  const inputClass =
    "w-full rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-colors";

  return (
    <section id="contact" className="py-24 md:py-32 bg-hero-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Big Ideas,{" "}
              <span className="text-gradient">Real Impact.</span>
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-lg mb-10 leading-relaxed">
              Ready to find the right IT, AI, ML, or cybersecurity talent for your organization? Share your needs and our team will respond within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "info@srivenpros.com", href: "mailto:info@srivenpros.com" },
                { icon: Phone, label: "(630) 635-0553 ext. 101", href: "tel:+16306350553" },
                { icon: MapPin, label: "MOI Business Suites, 776 Illinois Route 59, Suite 191-K, Naperville, IL" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/15">
                    <item.icon size={18} className="text-secondary" />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm text-primary-foreground/70">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.03] backdrop-blur-sm p-8 space-y-5"
          >
            <div>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className={inputClass}
                maxLength={100}
              />
              {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
            </div>

            <div>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className={inputClass}
                maxLength={255}
              />
              {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
            </div>

            <div>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company (optional)"
                className={inputClass}
                maxLength={100}
              />
            </div>

            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help? *"
                rows={4}
                className={`${inputClass} resize-none`}
                maxLength={2000}
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
