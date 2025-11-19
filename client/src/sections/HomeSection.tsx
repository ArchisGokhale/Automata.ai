import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import heroImage from "@assets/generated_images/Abstract_geometric_tech_hero_illustration_with_cyan_accents_176a0f5c.png";
import { useState } from "react";
import DownloadModal from "@/components/DownloadModal";

export default function HomeSection() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-primary/5 via-transparent to-transparent blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/50 to-transparent blur-3xl opacity-50" />

      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            v1.2 Public Beta is live
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Automata.ai <br />
            <span className="text-muted-foreground font-medium">Automated tests, made human-friendly.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Detect JS/TS files, generate test ideas, expand to Playwright steps, and run them with Playwright MCP — all with one click.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button 
              onClick={() => setIsDownloadOpen(true)}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              Download Desktop App
            </button>
            <a 
              href="#pricing" 
              className="px-8 py-4 rounded-xl font-semibold text-foreground bg-secondary hover:bg-secondary/80 transition-all flex items-center justify-center gap-2 border border-border"
            >
              See Pricing
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            <p>No source code leaves your machine unless you opt in.</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <img 
              src={heroImage} 
              alt="Automata Dashboard" 
              className="w-full h-auto object-cover opacity-90"
            />
            {/* UI Mockup Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
            
            {/* Floating Badge Mockup */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 bg-card p-4 rounded-lg shadow-lg border border-border flex items-center gap-3"
            >
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="font-mono text-sm">Tests passed: 42/42</span>
            </motion.div>
          </div>
          
          {/* Decorative blobs */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>

      <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
    </section>
  );
}
