import { motion } from "framer-motion";
import { FaPython, FaReact, FaGithub, FaDatabase } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiSqlite } from "react-icons/si";

export default function AfterHeroSection() {
  const projects = [
    {
      id: 1,
      title: "Career Counseling Platform",
      desc: "AI-based career guidance platform with resume parsing.",
      img: "/Projects/careercounselingplatform1.png",
      demo: "https://yourdemo.com/career",
      github: "https://github.com/yourrepo/career",
    },
    {
      id: 2,
      title: "Portfolio Website",
      desc: "Personal portfolio built with React, Tailwind, and Django backend.",
      img: "/Projects/portfolio.png",
      demo: "https://yourdemo.com/portfolio",
      github: "https://github.com/yourrepo/portfolio",
    },
    {
      id: 3,
      title: "E-Commerce Store",
      desc: "Full-stack e-commerce application with cart and payment integration.",
      img: "/Projects/careercounselingplatform1.png",
      demo: "https://yourdemo.com/ecommerce",
      github: "https://github.com/yourrepo/ecommerce",
    },
  ];

  return (
    <>
      <hr className="my-0 h-1 bg-gradient-to-r from-yellow-500 via-black to-green-500 border-0 rounded-full" />
      <div className="bg-gradient-to-b from-indigo-50 via-white to-blue-100 text-gray-900 overflow-x-hidden">
        {/* About Section */}
        <section className="bg-gradient-to-r from-indigo-500 via-white to-purple-200 py-20 px-6 ">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.img
              src="/profile.jpg"
              alt="Profile"
              className="shadow-2xl mx-auto border-4 border-indigo-100 rounded-full"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-2xl leading-relaxed text-gray-700 mb-8">
                I’m a passionate{" "}
                <span className="font-semibold text-indigo-700">
                  Full Stack Web Developer
                </span>
                skilled in building modern web applications using{" "}
                <span className="font-semibold text-blue-700">
                  Django, Python, React, TailwindCSS, and SQLite
                </span>
                . My focus is on creating efficient, scalable, and visually
                appealing digital solutions.
              </p>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <hr className="my-0 h-1 bg-gradient-to-r from-yellow-500 via-black to-green-500 border-0 rounded-full" />
        <section className="bg-gradient-to-b from-red-200 via-purple-100 to-yellow-100 text-gray-900 py-20 px-6  rounded-2xl">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-center mb-12"
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
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
                className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex justify-center text-blue-600 mb-3">
                  {skill.icon}
                </div>
                <p className="text-lg font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <hr className="my-0 h-1 bg-gradient-to-r from-yellow-500 via-black to-green-500 border-0 rounded-full" />
        <section className="bg-gradient-to-b from-cyan-300 via-white to-pink-200 text-gray-900 mx-auto py-20 px-6 rounded-2xl">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-center mb-12"
          >
            My Projects
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
              >
                <img src={p.img} alt={p.title} className="rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <div className="flex gap-4">
                  <a
                    href={p.demo}
                    target="_blank"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <hr className="my-0 h-1 bg-gradient-to-r from-yellow-500 via-black to-green-500 border-0 rounded-full" />
        <section className="bg-gradient-to-b from-gray-300 via-white to-blue-200 py-20 px-6 rounded-2xl">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Certificates & Achievements
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                id: 1,
                title: "AI for Beginners",
                img: "/Certificates/aicertificate.jpg",
                desc: "Completed introductory AI course covering basics of machine learning and AI applications.",
              },
              {
                id: 2,
                title: "Python for Beginners",
                img: "/Certificates/pythonbegineer.png",
                desc: "Earned certificate in Python programming with hands-on practice on basic coding problems.",
              },
            ].map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="rounded-lg mb-4 w-full h-60 object-contain"
                />
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-4 text-[20px] font-bold">
                  {cert.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <hr className="my-0 h-1 bg-gradient-to-r from-yellow-500 via-black to-green-500 border-0 rounded-full" />
        <section className="container bg-gradient-to-b from-green-300 via-purple-100 to-yellow-100 text-gray-900    rounded-2xl mx-auto py-20 px-6 mt-1">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Contact Me
          </motion.h2>
          <form className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
