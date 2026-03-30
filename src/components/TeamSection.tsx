import { motion } from "framer-motion";
import teamSai from "@/assets/team-sai.png";
import teamAnand from "@/assets/team-anand.png";
import teamKen from "@/assets/team-ken.png";

const team = [
  {
    name: "Sai Ratnaker Karumuri",
    title: "Chief Executive Officer",
    photo: teamSai,
    bio: "Sai is the visionary founder and CEO of SrivenPros, bringing over a decade of expertise in IT staffing and technology consulting. Under his leadership, SrivenPros has grown into a trusted partner for organizations across commercial, government, and non-profit sectors worldwide.",
  },
  {
    name: "Anand Setty",
    title: "Board Advisor",
    photo: teamAnand,
    bio: "Anand is a seasoned business leader with over 35 years of experience spanning engineering, supply chain, IT, human resources, and the non-profit sector. With leadership roles at Abbott Labs, i2 Technologies, Infosys, and C4ITA, he has consistently driven innovative change and business transformation. As founder and chairperson of C4ITA, he also serves on advisory councils including D128 Foundation for Learning and Harper College's AI & Cloud BILT.",
  },
  {
    name: "Ken Ropiak",
    title: "Senior Program Manager & Business Development",
    photo: teamKen,
    bio: "Ken brings a wealth of expertise as a Senior Program/PMP Project Manager, Certified Scrum Master, CSPO, Six Sigma Green Belt, Solutions Architect, and Business Development Executive. His versatile skill set and proven track record in delivering complex programs make him a valuable strategic asset to SrivenPros' growth and client success.",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The people driving SrivenPros' mission to deliver excellence in IT
            staffing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-accent mb-3">
                    {member.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
