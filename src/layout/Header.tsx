import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const whatsappLink = "https://wa.me/93788653654";

  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 ${
      isActive
        ? "text-black after:w-full"
        : "text-gray-600 after:w-0 hover:text-gray-900 hover:after:w-full"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
        isSticky ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 space-x-2">
          <img src={logo} alt="Faqiri Logo" className="w-40 h-auto" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="items-center hidden space-x-8 lg:flex">
          <NavLink end to="/" onClick={handleNavClick} className={navLinkClass}>
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={handleNavClick}
            className={navLinkClass}
          >
            About Us
          </NavLink>

          <NavLink
            to="/properties"
            onClick={handleNavClick}
            className={navLinkClass}
          >
            Properties
          </NavLink>

          <NavLink
            to="/agents"
            onClick={handleNavClick}
            className={navLinkClass}
          >
            Agents
          </NavLink>

          <NavLink to="/blog" onClick={handleNavClick} className={navLinkClass}>
            Blog
          </NavLink>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="flex-shrink-0 hidden space-x-4 lg:flex">
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="px-6 py-2 text-white bg-black rounded-3xl"
          >
            Contact Us
          </motion.a>

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
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white p-4 shadow-lg`}
      >
        <nav className="flex flex-col items-center pt-4 space-y-4">
          <NavLink end to="/" onClick={handleNavClick} className={navLinkClass}>
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={handleNavClick}
            className={navLinkClass}
          >
            About Us
          </NavLink>

          <NavLink
            to="/properties"
            onClick={handleNavClick}
            className={navLinkClass}
          >
            Properties
          </NavLink>

          <NavLink
            to="/agents"
            onClick={handleNavClick}
            className={navLinkClass}
          >
            Agents
          </NavLink>

          <NavLink to="/blog" onClick={handleNavClick} className={navLinkClass}>
            Blog
          </NavLink>

          <div className="flex flex-col pt-4 space-y-2">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-2 text-center text-white bg-black rounded-md"
            >
              Contact Us
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-2 text-black bg-transparent border-2 border-black rounded-md"
            >
              Submit Property
            </motion.button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
