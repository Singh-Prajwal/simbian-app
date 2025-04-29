"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.6 });
  const controls = useAnimation();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (inView) {
      setCount(initialCount); // Reset count when in view
      controls.start({ scale: [1, 1.1, 1], transition: { duration: 0.2 } });

      const totalDuration = 3000;
      const stepTime = totalDuration / initialCount;

      interval = setInterval(() => {
        setCount((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          controls.start({ scale: [1, 1.1, 1], transition: { duration: 0.2 } });
          return prev - 1;
        });
      }, stepTime);
    }

    return () => clearInterval(interval);
  }, [inView, initialCount, controls]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-6 w-64 shadow-lg border border-emerald-300"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      viewport={{ once: false }}
      animate={controls}
    >
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: [0.4, 1.2, 1] }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <CheckCircleIcon className="h-12 w-12 text-emerald-400" />
      </motion.div>

      <motion.div className="text-2xl font-bold text-emerald-300">
        {count}
      </motion.div>

      <p className="text-gray-300 mt-1">{title}</p>
    </motion.div>
  );
}
