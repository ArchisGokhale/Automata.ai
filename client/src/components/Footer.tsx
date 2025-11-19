import { Github, Twitter, Mail } from 'lucide-react';
import logo from '@assets/generated_images/Minimalist_logo_for_Automata.ai_fb74cde2.png';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Automata.ai" className="h-6 w-6" />
              <span className="font-bold text-lg">Automata.ai</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              Automated tests, made human-friendly. Detect, generate, and run Playwright scripts with AI-powered precision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:hello@automata.ai" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#download" className="hover:text-foreground">Download</a></li>
              <li><a href="#" className="hover:text-foreground">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">About</a></li>
              <li><a href="#internships" className="hover:text-foreground">Careers</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Automata.ai. All rights reserved.</p>
          <p>Built by Automata.ai</p>
        </div>
      </div>
    </footer>
  );
}
