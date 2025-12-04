import { motion } from "framer-motion";
import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";

export default function PricingSection() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <section id="pricing" className="py-12 relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white"
          >
            Ready to Transform Your Testing?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl mb-8"
          >
            Get a custom quote tailored to your team's needs and scale
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setWaitlistOpen(true)}
              className="group relative bg-blue-500 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-3 mx-auto overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/30 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                Register to Get a Quote
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </section>
  );
}
