import { motion } from "framer-motion";

export function StepItem({
  title,
  desc,
  delay,
}: {
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative group rounded-2xl bg-white/10 backdrop-blur-lg border border-emerald-400/20 shadow-md px-6 py-5 transition-all cursor-pointer hover:shadow-emerald-500/20"
    >
      <div className="absolute -left-5 top-5 h-4 w-4 bg-emerald-400 rounded-full border-4 border-white/20 shadow-lg" />
      <h4 className="text-l font-semibold text-white">{title}</h4>
      <p className="text-sm mt-1 text-gray-300">{desc}</p>
    </motion.div>
  );
}
