import ContactForm from "@/components/ContactForm";
import { Mail, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have questions about Enterprise plans, custom integrations, or just want to say hello? 
              Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background rounded-lg border border-border">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Support</h3>
                  <p className="text-muted-foreground text-sm">hello@automata.ai</p>
                  <p className="text-xs text-muted-foreground mt-1">Response time: ~24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background rounded-lg border border-border">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Community</h3>
                  <p className="text-muted-foreground text-sm">Join our Discord</p>
                  <p className="text-xs text-muted-foreground mt-1">Get help from the community</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
