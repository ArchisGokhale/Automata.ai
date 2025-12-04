import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import WaitlistModal from './WaitlistModal';
import logo from '@assets/generated_images/Minimalist_logo_for_Automata.ai_fb74cde2.png';

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
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Internships', href: '#internships' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img src={logo} alt="Automata.ai Logo" className="h-8 w-8 rounded-md transition-transform group-hover:scale-105" />
          <span className="font-bold text-lg tracking-tight">Automata.ai</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          <button 
            onClick={() => setWaitlistOpen(true)}
            className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-bold hover:from-primary/90 hover:to-primary/70 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:scale-105 flex items-center gap-2 group overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="relative">Join Waitlist</span>
          </button>
        </div>

        {/* Mobile Toggle and Theme */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            className="p-2 text-muted-foreground hover:text-foreground"
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
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-base font-medium text-foreground py-2 border-b border-border/50"
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
                className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-3 rounded-lg text-center font-bold mt-2 shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
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
