import PricingCard from "@/components/PricingCard";
import PricingToggle from "@/components/PricingToggle";
import { useState } from "react";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      plan: "Free",
      price: "$0",
      features: [
        "Up to 500 generated tests/mo",
        "Basic Playwright exports",
        "Community support",
        "Local execution only"
      ],
      isPopular: false,
      ctaText: "Download Free"
    },
    {
      plan: "Pro",
      price: isAnnual ? "$29" : "$39",
      features: [
        "Unlimited generated tests",
        "Advanced edge case detection",
        "CI/CD integration pipeline",
        "Priority email support",
        "Cloud runner access"
      ],
      isPopular: true,
      ctaText: "Start Pro Trial"
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: [
        "On-premise deployment",
        "Custom LLM fine-tuning",
        "SSO & Audit logs",
        "Dedicated success manager",
        "SLA guarantees"
      ],
      isPopular: false,
      ctaText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Start for free, upgrade when you need more power.
          </p>
          
          <PricingToggle enabled={isAnnual} setEnabled={setIsAnnual} />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <PricingCard 
              key={idx}
              {...plan}
            />
          ))}
        </div>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>Cancel anytime. Secure billing via Stripe.</p>
        </div>
      </div>
    </section>
  );
}
