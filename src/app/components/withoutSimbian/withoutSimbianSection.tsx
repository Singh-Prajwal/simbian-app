"use client";

import AlertCard from "./alertCard";
import { ShieldAlert, XOctagon, Flame } from "lucide-react";
import DynamicMessages from "./dynamicMessages";
import { motion } from "framer-motion";

export default function WithoutSimbianSection() {
  return (
    <section className="relative w-full bg-[url('/images/without-bg.jpg')] bg-cover bg-center py-24 px-6">
      <div className="max-w-7xl mx-auto text-white">
        {/* Title + Subheading + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-snug">
            Without <span className="text-red-400">Simbian</span>
          </h2>
          <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl">
            If this sounds all too familiar, you might want to...
          </p>
          <button className="mt-6 inline-flex items-center bg-red-500/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-red-400/50 transition">
            Book a Demo&nbsp;➔
          </button>
        </motion.div>

        {/* Grid Layout */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* LEFT: Dynamic messages */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative pl-8"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/50 rounded-full backdrop-blur-sm" />
            <DynamicMessages />
          </motion.div>

          {/* RIGHT: Alert cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AlertCard
              title="Ignored Alerts"
              initialCount={200}
              icon={<ShieldAlert size={48} />}
              color="red"
            />
            <AlertCard
              title="Wrongly Closed Alerts"
              initialCount={35}
              icon={<XOctagon size={48} />}
              color="red"
            />
            <AlertCard
              title="Active Threats"
              initialCount={5}
              icon={<Flame size={48} />}
              color="red"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
