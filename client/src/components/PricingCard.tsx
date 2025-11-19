import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function PricingCard({ 
  plan, 
  price, 
  features, 
  isPopular = false,
  ctaText = "Get Started",
  onCtaClick
}: PricingCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className={`relative p-8 rounded-2xl border ${
        isPopular 
          ? 'border-primary bg-card shadow-xl shadow-primary/10' 
          : 'border-border bg-card/50'
      } flex flex-col`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-lg font-medium text-muted-foreground mb-2">{plan}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          {price !== 'Custom' && <span className="text-muted-foreground">/mo</span>}
        </div>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
            <Check className="w-5 h-5 text-primary shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={onCtaClick}
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          isPopular 
            ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20' 
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        }`}
      >
        {ctaText}
      </button>
    </motion.div>
  );
}
