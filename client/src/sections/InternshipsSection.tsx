import InternshipForm from "@/components/InternshipForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function InternshipsSection() {
  const roles = [
    {
      title: "Frontend Engineer Intern",
      requirements: [
        "Strong React & TypeScript skills",
        "Passion for UI/UX and design systems",
        "Experience with modern build tools (Vite, Tailwind)"
      ]
    },
    {
      title: "AI/ML Research Intern",
      requirements: [
        "Knowledge of LLMs and prompt engineering",
        "Python & PyTorch experience",
        "Interest in code generation models"
      ]
    }
  ];

  return (
    <section id="internships" className="py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">Join the future of testing</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're looking for bright minds to help us build the next generation of developer tools. 
              If you love solving hard problems and shipping fast, we want to hear from you.
            </p>
            
            <div className="space-y-6">
              {roles.map((role, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold mb-4">{role.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {role.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {req}
                      </li>
                    ))}
                  </ul>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Apply Now</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle>Apply for {role.title}</DialogTitle>
                      </DialogHeader>
                      <InternshipForm />
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <div className="relative bg-card p-8 rounded-3xl border border-border shadow-xl">
               <h3 className="text-xl font-bold mb-4">Why intern with us?</h3>
               <ul className="space-y-4">
                 <li className="flex gap-4">
                   <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">1</div>
                   <div>
                     <h4 className="font-semibold">Real Impact</h4>
                     <p className="text-sm text-muted-foreground">Ship code to production in your first week.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">2</div>
                   <div>
                     <h4 className="font-semibold">Mentorship</h4>
                     <p className="text-sm text-muted-foreground">Direct access to senior engineers and founders.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">3</div>
                   <div>
                     <h4 className="font-semibold">Modern Stack</h4>
                     <p className="text-sm text-muted-foreground">Work with the latest tech: AI, Rust, TypeScript.</p>
                   </div>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
