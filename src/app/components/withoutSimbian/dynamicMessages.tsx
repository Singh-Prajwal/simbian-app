"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const messages = [
  "Wasting valuable analyst time on false positives",
  "Processing one alert at a time, missing the big picture",
  "Fixing SOAR automations instead of focusing on threats",
  "Missing critical active threats",
  "Delayed response time causing security risks",
];

export default function DynamicMessages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={messages[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-base md:text-lg text-gray-300 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-red-400/30 inline-block shadow-md"
        >
          {messages[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
