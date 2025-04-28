"use client";

import { motion } from "framer-motion";
import StepCard from "./stepCard";

const steps = [
  { title: "Triaged & Reported", description: "SOC Agent handled reporting" },
  {
    title: "Automated Response",
    description: "Incident automatically contained",
  },
  { title: "Comprehensive Analysis", description: "AI recognized patterns" },
  { title: "Accurate Detection", description: "Zero false positives" },
  { title: "24/7 Coverage", description: "No analyst fatigue" },
];

export default function StepFlow() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-16">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.3,
          }}
          viewport={{ once: true }}
          className="flex items-center"
        >
          <StepCard title={step.title} description={step.description} />
          {index !== steps.length - 1 && (
            <div className="hidden md:block w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-300 mx-6 rounded-full" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
