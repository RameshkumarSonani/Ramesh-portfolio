import { motion } from "framer-motion";
import { FaPython, FaReact, FaDatabase, FaGithub } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiSqlite } from "react-icons/si";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-blue-50 text-gray-900 min-h-screen py-16 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-12 text-indigo-800"
        >
          About Me
        </motion.h1>

        {/* Profile + Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.img
            src="/profile.jpg"
            alt="Profile"
            className="w-64 h-64 mx-auto rounded-2xl shadow-2xl border-4 border-indigo-200 object-cover"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed mb-6">
              Hello! I’m <span className="font-semibold">Ramesh Kumar</span>, a passionate{" "}
              <span className="font-semibold">Full Stack Web Developer</span> skilled in{" "}
              <span className="font-semibold">Django, Python, React, TailwindCSS, and SQLite</span>.
              I enjoy building modern, scalable, and user-friendly digital solutions.  
              Currently, I’m a <span className="font-semibold">Final Year Student</span> with{" "}
              <span className="font-semibold">4+ Projects</span> and{" "}
              <span className="font-semibold">2 Certificates</span> completed.
            </p>
            <div className="flex gap-4">
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
              >
                Download Resume
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-900 transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-10"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: <FaPython size={50} />, name: "Python" },
            { icon: <SiDjango size={50} />, name: "Django" },
            { icon: <FaReact size={50} />, name: "React" },
            { icon: <SiTailwindcss size={50} />, name: "TailwindCSS" },
            { icon: <SiSqlite size={50} />, name: "SQLite" },
            { icon: <FaDatabase size={50} />, name: "Databases" },
            { icon: <FaGithub size={50} />, name: "GitHub" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl text-center"
            >
              <div className="flex justify-center text-indigo-600 mb-3">
                {skill.icon}
              </div>
              <p className="text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Certificates & Achievements
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[1, 2].map((c) => (
            <motion.div
              key={c}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-indigo-50 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Certificate {c}</h3>
              <p className="text-gray-600">
                Details about certificate {c} or achievement.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline (Education / Experience) */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-10"
        >
          My Journey
        </motion.h2>
        <div className="relative border-l-4 border-indigo-300 pl-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold">2025 – Final Year</h3>
            <p className="text-gray-600">Completing degree in Computer Science at Sir Syed University.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold">2023 – Major Projects</h3>
            <p className="text-gray-600">Built Jarvis Assistant and Career Counseling Platform.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold">2021 – Started Coding Journey</h3>
            <p className="text-gray-600">Began learning Python and building small projects.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
