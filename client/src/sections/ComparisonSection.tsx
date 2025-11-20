import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ComparisonCell {
  text: string;
  isAdvantage: boolean;
}

interface ComparisonRow {
  category: string;
  manual: ComparisonCell;
  automation: ComparisonCell;
  automata: ComparisonCell;
}

export default function ComparisonSection() {
  const comparisonData: ComparisonRow[] = [
    {
      category: "Setup Effort",
      manual: { text: "High effort", isAdvantage: false },
      automation: { text: "Medium — framework setup", isAdvantage: false },
      automata: { text: "Near-zero — auto-detects tests & components", isAdvantage: true },
    },
    {
      category: "Speed of Test Creation",
      manual: { text: "Slow", isAdvantage: false },
      automation: { text: "Moderate", isAdvantage: false },
      automata: { text: "Instant — generate tests in one click", isAdvantage: true },
    },
    {
      category: "Skill Required",
      manual: { text: "Low", isAdvantage: true },
      automation: { text: "High (scripting/tools)", isAdvantage: false },
      automata: { text: "Low — natural language to tests", isAdvantage: true },
    },
    {
      category: "Coverage Quality",
      manual: { text: "Inconsistent", isAdvantage: false },
      automation: { text: "Good but engineer-dependent", isAdvantage: false },
      automata: { text: "High — AI-suggested scenarios & edge cases", isAdvantage: true },
    },
    {
      category: "Maintenance Effort",
      manual: { text: "Very high", isAdvantage: false },
      automation: { text: "High", isAdvantage: false },
      automata: { text: "Low — update or regenerate instantly", isAdvantage: true },
    },
    {
      category: "Scalability",
      manual: { text: "Poor", isAdvantage: false },
      automation: { text: "Moderate", isAdvantage: false },
      automata: { text: "Excellent — supports unlimited test creation", isAdvantage: true },
    },
    {
      category: "Privacy & Security",
      manual: { text: "Local", isAdvantage: true },
      automation: { text: "Varies by infra", isAdvantage: false },
      automata: { text: "Local-first — code stays on device", isAdvantage: true },
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="container-custom relative z-10">
        {/* Title and subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Manual Testing vs Automation Testing vs Automata
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            A modern, developer-first way to test software.
          </motion.p>
        </div>

        {/* Comparison table - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="bg-card rounded-xl shadow-lg border border-border/50 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Table header */}
            <div className="grid grid-cols-4 bg-secondary/30 border-b border-border/50">
              <div className="p-6 font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                Category
              </div>
              <div className="p-6 font-semibold text-sm text-foreground border-l border-border/50 bg-primary/5">
                Automata
              </div>
              <div className="p-6 font-semibold text-sm text-foreground border-l border-border/50">
                Manual Testing
              </div>
              <div className="p-6 font-semibold text-sm text-foreground border-l border-border/50">
                Automation Testing
              </div>
            </div>

            {/* Table rows */}
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-4 border-b border-border/30 last:border-b-0 hover:bg-secondary/20 transition-colors duration-200"
              >
                <div className="p-6 font-medium text-sm">
                  {row.category}
                </div>
                <div className="bg-primary/5">
                  <ComparisonCellDesktop cell={row.automata} highlight />
                </div>
                <ComparisonCellDesktop cell={row.manual} />
                <ComparisonCellDesktop cell={row.automation} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Comparison cards - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-xl shadow-md border border-border/50 overflow-hidden"
            >
              <div className="bg-secondary/30 p-4 border-b border-border/50">
                <h3 className="font-semibold text-base">{row.category}</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-primary/5 -mx-4 p-4">
                  <ComparisonCellMobile title="Automata" cell={row.automata} highlight />
                </div>
                <ComparisonCellMobile title="Manual Testing" cell={row.manual} />
                <ComparisonCellMobile title="Automation Testing" cell={row.automation} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="container-custom mt-24">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}

// Desktop cell component
function ComparisonCellDesktop({ 
  cell, 
  highlight = false 
}: { 
  cell: ComparisonCell; 
  highlight?: boolean;
}) {
  return (
    <div className="p-6 border-l border-border/50 flex items-start gap-3">
      <div className="flex-shrink-0 mt-0.5">
        {cell.isAdvantage ? (
          <div className="w-5 h-5 rounded-full bg-[#3FFFA8]/20 flex items-center justify-center">
            <Check 
              className="w-3.5 h-3.5" 
              style={{ color: '#3FFFA8' }}
              strokeWidth={3}
            />
          </div>
        ) : (
          <div className="w-5 h-5 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
          </div>
        )}
      </div>
      <p className={`text-sm leading-relaxed ${highlight && cell.isAdvantage ? 'font-medium' : ''}`}>
        {cell.text}
      </p>
    </div>
  );
}

// Mobile cell component
function ComparisonCellMobile({ 
  title, 
  cell,
  highlight = false
}: { 
  title: string; 
  cell: ComparisonCell;
  highlight?: boolean;
}) {
  return (
    <div className="space-y-2">
      <p className={`text-sm font-medium ${highlight ? 'text-foreground' : 'text-muted-foreground'}`}>
        {title}
      </p>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          {cell.isAdvantage ? (
            <div className="w-5 h-5 rounded-full bg-[#3FFFA8]/20 flex items-center justify-center">
              <Check 
                className="w-3.5 h-3.5" 
                style={{ color: '#3FFFA8' }}
                strokeWidth={3}
              />
            </div>
          ) : (
            <div className="w-5 h-5 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
            </div>
          )}
        </div>
        <p className="text-sm leading-relaxed">
          {cell.text}
        </p>
      </div>
    </div>
  );
}
