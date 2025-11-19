import FeatureCard from "@/components/FeatureCard";
import { Code2, FileSearch, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      icon: FileSearch,
      title: "Auto-detect JS/TS",
      description: "Instantly scans your project to find untest files and suggests critical paths coverage.",
    },
    {
      icon: Sparkles,
      title: "Suggest Test Cases",
      description: "AI analyzes your component logic to propose comprehensive test scenarios and edge cases.",
    },
    {
      icon: Code2,
      title: "Generate Playwright Scripts",
      description: "Converts plain English test ideas into robust, production-ready Playwright Typescript code.",
    },
    {
      icon: Play,
      title: "Run in Playwright MCP",
      description: "Execute generated tests immediately in a sandboxed environment without leaving the app.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-secondary/30 border-y border-border/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Built for modern engineering teams</h2>
          <p className="text-muted-foreground text-lg">
            Stop writing boilerplate. Let Automata handle the setup so you can focus on shipping features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
