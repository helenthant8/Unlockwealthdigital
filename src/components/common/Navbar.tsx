import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Service", "Contact"];

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <div className="w-full px-6 pt-6 relative z-1000">
      <nav className="max-w-7xl mx-auto flex items-center justify-between bg-nav-gradient border border-brand-soft rounded-2xl px-6 md:px-8 py-3 shadow-sm backdrop-blur-md relative">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="fill-brand-blue w-full h-full">
              <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
            </svg>
          </div>
          <span className="font-bold text-lg md:text-xl text-brand-dark tracking-tight">
            Unlock Wealth Digital
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-gray-800 hover:text-blue-500 transition-all duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
              className="absolute top-[110%] left-0 w-full bg-white border border-gray-100 rounded-2xl shadow-xl py-6 md:hidden overflow-hidden z-1001"
            >
              <ul className="flex flex-col items-center gap-6">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-all"
                    >
                      {item}
                    </a>
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
