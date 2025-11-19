import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Apple, Monitor, Command } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const platforms = [
    { name: 'macOS', icon: Apple, desc: 'Universal .dmg', link: '#' },
    { name: 'Windows', icon: Monitor, desc: 'Installer .exe', link: '#' },
    { name: 'Linux', icon: Command, desc: 'AppImage', link: '#' },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">Download Automata.ai</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-4 py-4">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              className="flex items-center p-4 border rounded-xl hover:border-primary hover:bg-primary/5 transition-all group"
              onClick={(e) => {
                e.preventDefault();
                // Mock download
                alert(`Downloading for ${platform.name}...`);
                onClose();
              }}
            >
              <div className="h-10 w-10 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-white transition-colors">
                <platform.icon className="w-5 h-5 text-foreground" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-semibold">{platform.name}</h4>
                <p className="text-xs text-muted-foreground">{platform.desc}</p>
              </div>
              <div className="ml-auto text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Download
              </div>
            </a>
          ))}
        </div>
        <div className="text-center text-xs text-muted-foreground bg-secondary/50 p-3 rounded-lg">
          <p>Current Version: v1.2.0-beta</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
