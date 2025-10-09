// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass =
    "relative pb-1 transition duration-300 hover:text-yellow-300";

  const activeClass =
    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-300";

  return (
    <nav className="bg-gradient-to-r from-yellow-700 via-purple-700 to-red-600 text-white dark:bg-black dark:text-white overflow-hidden mt-1 border rounded-2xl mb-1 max-w-[1800px]">
      <div className="flex items-center justify-between px-5 py-3">
        {/* Left side (hamburger) */}
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
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Contact Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>

        {/* Dark Mode Button */}
        <div>
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="py-2 px-2 rounded-full bg-amber-300 dark:bg-gray-600 transition-colors duration-300"
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 bg-gradient-to-r from-yellow-700 via-purple-700 to-red-600 border-t text-xl font-medium">
            {["/", "/about", "/contact", "/projects"].map((path, i) => (
              <li key={i}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `${navLinkClass} ${isActive ? activeClass : ""}`
                  }
                >
                  {path === "/"
                    ? "Home"
                    : path === "/about"
                    ? "About"
                    : path === "/contact"
                    ? "Contact Me"
                    : "Projects"}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
