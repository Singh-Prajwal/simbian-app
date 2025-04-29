"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import AlertDropper from "../shared/alertDropper";

const borderColorMap = {
  red: "border-red-400/30",
  green: "border-green-300/30",
  blue: "border-blue-300/30",
};

const iconColorMap = {
  red: "text-red-400",
  green: "text-green-400",
  blue: "text-blue-400",
};

type AlertColor = keyof typeof borderColorMap;

interface AlertCardProps {
  title: string;
  initialCount: number;
  icon: React.ReactNode;
  color: AlertColor;
}

export default function AlertCard({
  title,
  initialCount,
  icon,
  color,
}: AlertCardProps) {
  const [count, setCount] = useState(initialCount);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      boxShadow: [
        `0 0 0px rgba(0,0,0,0)`,
        `0 0 20px rgba(255,0,0,0.5)`,
        `0 0 0px rgba(0,0,0,0)`,
      ],
      transition: { duration: 0.6 },
    });
  }, [count, controls]);

  return (
    <motion.div
      animate={controls}
      className={`relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border ${borderColorMap[color]} hover:scale-105 transition-all duration-300`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className={`text-5xl mb-4 ${iconColorMap[color]}`}>{icon}</div>

      <motion.div
        className="text-4xl font-bold text-white"
        whileInView={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
      >
        {count}
      </motion.div>

      <div className="mt-2 text-l font-semibold text-gray-300">{title}</div>

      <AlertDropper />
    </motion.div>
  );
}
