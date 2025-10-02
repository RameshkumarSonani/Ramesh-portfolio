// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white overflow-hidden max-w-[1800px] dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Hi, I am <span className="text-red-800">Ramesh Kumar</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl md:text-3xl font-semibold mb-8"
        >
          A Passionate Full Stack Web Developer 🚀
        </motion.h2>

        {/* Skill Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <span className="px-4 py-2 bg-white/20 rounded-full text-sm md:text-base hover:bg-white/30 transition">
            Django
          </span>
          <span className="px-4 py-2 bg-white/20 rounded-full text-sm md:text-base hover:bg-white/30 transition">
            Python
          </span>
          <span className="px-4 py-2 bg-white/20 rounded-full text-sm md:text-base hover:bg-white/30 transition">
            React + Tailwind
          </span>
          <span className="px-4 py-2 bg-white/20 rounded-full text-sm md:text-base hover:bg-white/30 transition">
            SQLite
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex gap-6"
        >
          <Link
            to="/projects"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/40 via-transparent to-black/40"></div>
    </section>
  );
}
