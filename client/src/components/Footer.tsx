import { Linkedin, Instagram, Twitter } from 'lucide-react';
import logo from '@assets/generated_images/LOGO.png';

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Automata.ai" className="h-10 w-10 object-cover" />
              <span className="font-bold text-xl text-white">Automata.ai</span>
            </a>
            <p className="text-white text-sm max-w-xs mb-6">
              Automated tests, made human-friendly. Detect, generate, and run test scripts with AI-powered precision.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/useautomataai/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/automata.ai_/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.reddit.com/user/automata_ai/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </a>
              <a href="https://x.com/useautomata" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="#demo" className="hover:text-white/80">Demo</a></li>
              <li><a href="#pricing" className="hover:text-white/80">Pricing</a></li>
              <li><a href="#comparison" className="hover:text-white/80">Comparison</a></li>
              <li><a href="#" className="hover:text-white/80">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="#faq" className="hover:text-white/80">FAQ</a></li>
              <li><a href="#" className="hover:text-white/80">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white/80">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white/80">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white">
          <p>© {new Date().getFullYear()} Automata.ai. All rights reserved.</p>
          <p>Built by Automata.ai</p>
        </div>
      </div>
    </footer>
  );
}
