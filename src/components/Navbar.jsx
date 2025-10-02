// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // hamburger aur close icon
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-yellow-700 via-purple-700 to-red-600 text-white dark:bg-black dark:text-white  overflow-hidden mt-1 border rounded-2xl mb-1 max-w-[1800px]">
      <div className="flex items-center justify-between px-5 py-3">
        {/* Left side (hamburger on small screens) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Center Logo */}
        <div className="flex items-center gap-3 mx-auto md:mx-0">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
          <span className="text-xl font-bold hidden md:block">
            My Portfolio
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-medium">
          <li className="hover:text-yellow-300 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-300 transition">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-yellow-300 transition">
            <Link to="/contact">Contact Me</Link>
          </li>
          <li className="hover:text-yellow-300 transition">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
        <div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="py-2 px-2 rounded-full bg-amber-300 dark:bg-gray-600 transition-colors duration-300"
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu niche aa raha hai ab */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 bg-gradient-to-r from-yellow-700 via-purple-700 to-red-600 border-t text-xl font-medium">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact Me
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
