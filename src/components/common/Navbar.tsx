import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import Logo from "../../assets/logo.png";

function Navbar() {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Service", "Contact"];

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "mm" : "en";
    i18n.changeLanguage(nextLang);
  };

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <div className="w-full px-6 pt-6 relative z-1000">
      <nav className="max-w-7xl mx-auto flex items-center justify-between bg-nav-gradient border border-brand-soft rounded-2xl px-6 md:px-8 py-3 shadow-sm backdrop-blur-md relative">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={Logo} alt="Resort Logo" className="w-full h-full" />
          </div>
          <span className="font-bold text-lg md:text-xl text-brand-dark tracking-tight">
            {t("hero.title")}
          </span>
        </Link>

        {/* Right Section: Desktop Links & Language Switcher */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-lg font-medium text-gray-800 hover:text-blue-500 transition-all duration-300"
                >
                  {/* t(`navbar.${item.toLowerCase()}`) */}
                  {t(`navbar.${item.toLowerCase()}`)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Language Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all text-sm font-bold text-gray-700"
          >
            <MdLanguage className="text-blue-500 text-lg" />
            {i18n.language === "en" ? "မြန်မာ" : "EN"}
          </button>
        </div>

        {/* Mobile: Language & Menu Buttons */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Language Button */}
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg bg-gray-50 text-blue-600 font-bold text-xs border border-gray-100"
          >
            {i18n.language === "en" ? "MM" : "EN"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-800 focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-[110%] left-0 w-full bg-white border border-gray-100 rounded-2xl shadow-xl py-8 md:hidden overflow-hidden z-1001"
            >
              <ul className="flex flex-col items-center gap-6">
                {navItems.map((item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-all"
                    >
                      {t(`navbar.${item.toLowerCase()}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

export default Navbar;
