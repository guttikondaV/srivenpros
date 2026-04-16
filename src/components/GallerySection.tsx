import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";

const photos = [
  { src: gallery1, alt: "SrivenPros team collaborating on laptops at a community event" },
  { src: gallery2, alt: "SrivenPros team members networking and discussing ideas" },
  { src: gallery3, alt: "Team members engaging in a lively group discussion" },
  { src: gallery4, alt: "Wide view of a SrivenPros community workshop event" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Life at SrivenPros
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Snapshots from our events, workshops, and community engagements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* LinkedIn Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <a
            href="https://www.linkedin.com/posts/ilabor-network_srivenpros-vendor-spotlight-1-activity-7447673527513825280-9JUe"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-border/60 bg-card p-8 shadow-card hover:shadow-elevated hover:border-accent/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">iLabor Network</p>
                <p className="text-xs text-muted-foreground">Vendor Spotlight</p>
              </div>
            </div>
            <p className="text-foreground font-semibold mb-2">
              🌟 SrivenPros — Vendor Spotlight
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              SrivenPros has been recognized by iLabor Network as a featured vendor partner, highlighting our commitment to delivering quality IT staffing solutions and building trusted partnerships across the industry.
            </p>
            <span className="text-sm font-medium text-accent group-hover:underline">
              Read the full post on LinkedIn →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
