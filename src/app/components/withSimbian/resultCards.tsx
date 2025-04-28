"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";

const cardsData = [
  { title: "Ignored Alerts", initialCount: 200 },
  { title: "Wrongly Closed Alerts", initialCount: 35 },
  { title: "Active Threats", initialCount: 5 },
];

export default function ResultCards() {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-16">
      {cardsData.map((card, idx) => (
        <CountdownCard
          key={idx}
          title={card.title}
          initialCount={card.initialCount}
          delay={idx * 0.3}
        />
      ))}
    </div>
  );
}

interface CountdownCardProps {
  title: string;
  initialCount: number;
  delay: number;
}

function CountdownCard({ title, initialCount, delay }: CountdownCardProps) {
  const [count, setCount] = useState(initialCount);
  const controls = useAnimation();

  useEffect(() => {
    const totalDuration = 3000;
    const stepTime = totalDuration / initialCount;

    const iv = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(iv);
          return 0;
        }
        controls.start({
          scale: [1, 1.1, 1],
          transition: { duration: 0.2 },
        });
        return prev - 1;
      });
    }, stepTime);

    return () => clearInterval(iv);
  }, [initialCount, controls]);

  return (
    <motion.div
      className="flex flex-col items-center bg-white rounded-xl p-6 w-64 shadow-md border border-green-300"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      animate={controls}
    >
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: [0.4, 1.2, 1] }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <CheckCircleIcon className="h-12 w-12 text-green-500" />
      </motion.div>

      <motion.div className="text-2xl font-bold text-green-700" animate={{}}>
        {count}
      </motion.div>

      <p className="text-gray-500 mt-1">{title}</p>
    </motion.div>
  );
}
