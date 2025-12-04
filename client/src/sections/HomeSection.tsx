import { motion } from "framer-motion";
import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";

export default function HomeSection() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        {/* Beta Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-8"
        >
          Beta Launch: 15th Feb, 2026
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white/95"
        >
          Why Spend Weeks Writing Tests?
        </motion.h1>
        
        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/85 mb-4 max-w-4xl mx-auto leading-relaxed"
        >
          Instant Test Coverage For Every Commit, Every Framework.
        </motion.h2>
        
        {/* Sub Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/75 mb-10 max-w-4xl mx-auto leading-relaxed"
        >
          Complete AI Testing System: From Codebase Scan to Bug Reports — We Generate, Run & Maintain Your Tests Automatically.
        </motion.p>
        
        {/* Join Waitlist Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button 
            onClick={() => setWaitlistOpen(true)}
            className="group relative bg-blue-500 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-3 mx-auto overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/30 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Join Waitlist</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 text-white group-hover:text-blue-100 transition-colors duration-300"
            >
              →
            </motion.div>
          </button>
        </motion.div>
      </div>

      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </section>
  );
}
