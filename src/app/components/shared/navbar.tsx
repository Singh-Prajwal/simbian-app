"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4  top-0 z-50 bg-black/70 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-2xl">
          <span className="text-blue-400">🛡 Simbian</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-white font-medium text-base">
          <a href="#" className="hover:text-blue-400 transition">
            Products
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Company
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Resources
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Blog
          </a>
          <button className="bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-300 transition flex items-center gap-2">
            Book a Demo <span>🛡</span>
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-white font-medium text-base">
          <a href="#" className="hover:text-blue-400 transition">
            Products
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Company
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Resources
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Blog
          </a>
          <button className="bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-200 transition flex items-center gap-2">
            Book a Demo <span>🛡</span>
          </button>
        </div>
      )}
    </nav>
  );
}
