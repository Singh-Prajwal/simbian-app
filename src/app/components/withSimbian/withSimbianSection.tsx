"use client";

import { motion } from "framer-motion";
import ResultCards from "./resultCards";
import { StepItem } from "./stepItem";

export default function WithSimbianSection() {
  return (
    <section className="relative w-full bg-[url('/images/with-bg.jpg')] bg-cover bg-center py-24 px-6">
      <div className="max-w-7xl mx-auto text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-snug">
            With <span className="text-emerald-400">Simbian</span>
          </h2>
          <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl">
            Relax. Our AI Agents will take it from here.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <ResultCards />

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {},
              }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500/60 to-emerald-300/40 animate-pulse rounded-full" />

              <div className="flex flex-col gap-8">
                {steps.map((step, index) => (
                  <StepItem
                    key={index}
                    title={step.title}
                    desc={step.desc}
                    delay={index * 0.4} // <--- This causes bottom-up staggered loading
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { title: "Triaged & Reported", desc: "SOC Agent investigated and reported." },
  { title: "Less noise", desc: "90% of alerts resolved automatically, 24/7." },
  {
    title: "Comprehensive Analysis",
    desc: "AI recognized patterns",
  },
  {
    title: "Accurate Detection",
    desc: " Zero false positives",
  },
  {
    title: "24/7 Coverage",
    desc: "No analyst fatigue",
  },
];
