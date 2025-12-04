import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How fast does Automata.ai generate tests?",
      answer: "Automata.ai generates comprehensive test suites in seconds, not hours. Our AI analyzes your codebase and creates production-ready Playwright tests instantly."
    },
    {
      question: "What programming languages and frameworks are supported?",
      answer: "We support JavaScript, TypeScript, React, Vue, Angular, and Node.js applications. More languages and frameworks are being added regularly."
    },
    {
      question: "Does it integrate with existing CI/CD pipelines?",
      answer: "Yes, Automata.ai seamlessly integrates with GitHub Actions, Jenkins, GitLab CI, and other popular CI/CD platforms through our CLI and API."
    },
    {
      question: "How accurate are the AI-generated tests?",
      answer: "Our AI achieves 95%+ accuracy in test generation by analyzing your code patterns, user flows, and edge cases to create comprehensive test coverage."
    },
    {
      question: "Can I customize the generated tests?",
      answer: "Absolutely! All generated tests are fully editable and can be customized to match your specific testing requirements and coding standards."
    },
    {
      question: "Is my code data secure and private?",
      answer: "Yes, your code never leaves your machine unless you opt-in. We offer local-first processing and enterprise-grade security for cloud features."
    },
    {
      question: "What's the difference between Automata.ai and manual testing?",
      answer: "Automata.ai eliminates weeks of manual test writing, provides consistent quality, and scales infinitely while manual testing is slow and inconsistent."
    },
    {
      question: "Do you offer enterprise support and custom integrations?",
      answer: "Yes, we provide dedicated enterprise support, custom integrations, on-premise deployment, and SLA guarantees for enterprise customers."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white"
          >
            Everything You Need to{" "}
            <span className="text-blue-600">Know</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl"
          >
            Get answers to the most common questions about Automata.ai and how it can transform your testing workflow.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-blue-900/20 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-800/20 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-white/70" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/70" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-white/10"
                >
                  <div className="px-6 py-4">
                    <p className="text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}