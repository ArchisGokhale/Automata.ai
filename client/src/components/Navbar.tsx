import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import WaitlistModal from './WaitlistModal';
import logo from '@assets/generated_images/LOGO.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Demo', href: '#demo' },
    { name: 'Comparison', href: '#comparison' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="relative bg-transparent z-50">
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img src={logo} alt="Automata.ai Logo" className="h-12 w-12 rounded-md transition-transform group-hover:scale-105 object-cover" />
          <span className="font-bold text-2xl tracking-tight text-white">Automata.ai</span>
        </a>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold text-white hover:text-white/90 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setWaitlistOpen(true)}
            className="text-sm font-bold text-white hover:text-white/90 transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Right side - Join Waitlist */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setWaitlistOpen(true)}
            className="relative bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 group overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            <span className="relative">Join Waitlist</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            className="p-2 text-white/80 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/10 backdrop-blur-md border-b border-white/20 overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-base font-bold text-white py-2 border-b border-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setWaitlistOpen(true);
                  setIsOpen(false);
                }}
                className="text-base font-bold text-white py-2 border-b border-white/20 text-left"
              >
                Contact
              </button>
              <button 
                onClick={() => {
                  setWaitlistOpen(true);
                  setIsOpen(false);
                }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-3 rounded-lg text-center font-medium mt-2 shadow-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </nav>
  );
}
