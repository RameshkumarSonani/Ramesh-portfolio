import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-800 via-blue-700 to-indigo-800 text-white py-6"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side - text */}
        <motion.p whileHover={{ scale: 1.05 }} className="text-sm md:text-base">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </motion.p>

        {/* Right side - social icons */}
        <div className="flex gap-6 text-2xl">
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ramesh-kumar-3b4b7224b/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
