import { motion } from "framer-motion";

export function StepItem({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-start gap-4 cursor-pointer transition-all duration-300 group"
    >
      <div className="flex-shrink-0 mt-1 h-10 w-10 rounded-full bg-emerald-500/80 flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:shadow-emerald-500/40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-bold text-emerald-400">{title}</h3>
        <p className="mt-1 text-sm text-gray-300">{desc}</p>
      </div>
    </motion.div>
  );
}
