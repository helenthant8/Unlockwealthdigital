import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import Logo from "../../assets/logo.png";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "mm" : "en";
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-1000 transition-all duration-300 px-6 md:px-12 py-4 ${
        scrolled ? "bg-black/10 shadow-2xl py-3" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9">
            <img
              src={Logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-2xl font-black text-white tracking-tighter uppercase">
            Unlock {""}
            <span className="text-blue-700">Wealth Digital</span>
          </span>
        </Link>

        {/* Desktop Links & Actions */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-blue-900 ${
                    scrolled
                      ? location.pathname === link.path
                        ? "text-white"
                        : "text-blue-950"
                      : "text-blue-800"
                  }`}
                >
                  {t(`navbar.${link.name.toLowerCase()}`)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="text-blue-800 hover:text-blue-900 flex items-center gap-2 text-xs font-bold transition-all"
            >
              <MdLanguage size={18} />
              {i18n.language === "en" ? "MM" : "EN"}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-blue-950 font-bold text-xs uppercase"
          >
            {i18n.language === "en" ? "MM" : "EN"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-950 text-3xl"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed inset-0 top-0 left-0 w-full h-screen bg-linear-to-br from-[#99C8FF] via-white to-[#99C8FF] opacity-90 flex flex-col items-center justify-center gap-10 md:hidden z-50"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-blue-950 text-4xl"
              >
                <HiX />
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-blue-800 hover:text-yellow-950 uppercase tracking-[0.3em]"
                >
                  {t(`navbar.${link.name.toLowerCase()}`)}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
