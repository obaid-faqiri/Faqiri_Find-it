// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { logo } from "../assets/index";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Shared nav link style with animated sliding underline on hover
  const navLinkClass =
    "text-gray-600 hover:text-gray-900 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <motion.header
      className={`fixed top-0 w-full z-10 transition-all duration-300 ${
        isSticky ? "bg-white shadow-lg" : "bg-transparent"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Single row — logo | nav | buttons — all inside one flex container */}
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 space-x-2">
          <img src={logo} alt="Faqiri Logo" className="w-40 h-auto" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="items-center hidden space-x-8 lg:flex">
          <Link to="/" className={navLinkClass}>
            Home
          </Link>
          <Link to="/about" className={navLinkClass}>
            About Us
          </Link>
          <Link to="/properties" className={navLinkClass}>
            Properties
          </Link>
          <Link to="/agents" className={navLinkClass}>
            Agents
          </Link>
          <Link to="/blog" className={navLinkClass}>
            Blog
          </Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="flex-shrink-0 hidden space-x-4 lg:flex">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-2 text-white bg-black rounded-3xl"
          >
            Contact Us
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-transparent border-[1.3px] border-black text-black px-6 py-2 rounded-3xl"
          >
            Submit Property
          </motion.button>
        </div>

        {/* Burger Menu for Small Devices */}
        <div className="block lg:hidden">
          <button
            className="text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-white p-4 shadow-lg`}
      >
        <nav className="flex flex-col items-center pt-4 space-y-4">
          <Link to="/" className={navLinkClass}>
            Home
          </Link>
          <Link to="/about" className={navLinkClass}>
            About Us
          </Link>
          <Link to="/properties" className={navLinkClass}>
            Properties
          </Link>
          <Link to="/agents" className={navLinkClass}>
            Agents
          </Link>
          <Link to="/blog" className={navLinkClass}>
            Blog
          </Link>

          <div className="flex flex-col pt-4 space-y-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-2 text-white bg-black rounded-md"
            >
              Contact Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-2 text-black bg-transparent border-2 border-black rounded-md"
            >
              Submit Property
            </motion.button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
