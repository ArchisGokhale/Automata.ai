import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";

export default function DemoSection() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <section id="demo" className="py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white"
          >
            See Automata.ai in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl"
          >
            Watch how we transform your testing workflow from weeks to minutes
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/CddhoOO7n2I?si=zD-f2NEP-B1jCups" 
                title="Automata.ai Demo Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              From Code to Tests in Seconds
            </h3>
            <p className="text-white/70 text-lg leading-relaxed">
              See how Automata.ai scans your codebase, identifies untested components, 
              generates comprehensive test scenarios, and creates production-ready 
              Playwright scripts—all automatically.
            </p>
            
            <button
              onClick={() => setWaitlistOpen(true)}
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <Play className="w-4 h-4" />
              <span className="relative">See in Action</span>
            </button>
          </motion.div>
        </div>
      </div>

      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </section>
  );
}