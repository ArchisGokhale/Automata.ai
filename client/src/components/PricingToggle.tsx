import { motion } from 'framer-motion';

interface PricingToggleProps {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
}

export default function PricingToggle({ enabled, setEnabled }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-3 mb-12">
      <span className={`text-sm font-medium ${!enabled ? 'text-foreground' : 'text-muted-foreground'}`}>
        Monthly
      </span>
      
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative w-14 h-8 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
          enabled ? 'bg-primary' : 'bg-slate-200'
        }`}
      >
        <motion.div
          initial={false}
          animate={{ x: enabled ? 26 : 2 }}
          className="absolute top-1 left-0 bg-white w-6 h-6 rounded-full shadow-sm"
        />
      </button>

      <span className={`text-sm font-medium ${enabled ? 'text-foreground' : 'text-muted-foreground'}`}>
        Annual <span className="text-primary text-xs font-bold ml-1">(Save 20%)</span>
      </span>
    </div>
  );
}
