import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { label: "Founded", value: "2025", sub: "Pune, India" },
    { label: "Team", value: "3+", sub: "Engineers & Researchers" },
    { label: "Users", value: "1k+", sub: "Developers trusting us" },
  ];
  const team = [
    { name: "Shreyas Phadnis", role: "Co-Founder / Engineer" },
    { name: "Archis Gokhale", role: "Co-Founder / Engineer" },
    { name: "Devanshi Singh", role: "Co-Founder / Engineer" },
  ];
  return (
    <section id="about" className="py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe testing shouldn't be a chore. Our mission is to eliminate the friction between writing code and verifying it, making robust software the default, not the exception.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 bg-background rounded-xl border border-border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-xs text-muted-foreground">
                IMG
              </div>
              <div className="text-left">
                <div className="font-semibold">{member.name}</div>
                <div className="text-xs text-muted-foreground">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
