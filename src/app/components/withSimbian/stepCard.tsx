"use client";

interface StepCardProps {
  title: string;
  description: string;
}

export default function StepCard({ title, description }: StepCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-6 w-64 text-center border border-emerald-300/30 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-xl md:text-2xl font-bold text-emerald-400">
        {title}
      </h3>
      <p className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
