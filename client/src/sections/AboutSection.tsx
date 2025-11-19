import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 border-y border-border/50 bg-card/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe testing shouldn't be a chore. Our mission is to eliminate the friction between writing code and verifying it, making robust software the default, not the exception.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          {[
            { label: "Founded", value: "2023", sub: "San Francisco, CA" },
            { label: "Team", value: "12+", sub: "Engineers & Researchers" },
            { label: "Users", value: "10k+", sub: "Developers trusting us" },
          ].map((stat, idx) => (
            <div key={idx} className="p-6 bg-background rounded-xl border border-border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Team Placeholders */}
        <div className="grid md:grid-cols-3 gap-8">
           {[1, 2, 3].map((i) => (
             <div key={i} className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
               <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-xs text-muted-foreground">
                 IMG
               </div>
               <div className="text-left">
                 <div className="font-semibold">Team Member {i}</div>
                 <div className="text-xs text-muted-foreground">Co-Founder / Engineer</div>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
