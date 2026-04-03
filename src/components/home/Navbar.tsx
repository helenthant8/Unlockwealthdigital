function Navbar() {
  const navItems = ["Home", "About", "Service", "Contact"];
  return (
    <div className="w-full px-6 pt-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between bg-linear-to-r from-[#A5CCFF] to-white/80 border border-blue-100 rounded-2xl px-8 py-3 shadow-sm backdrop-blur-md">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            {/* SVG Logo */}
            <svg viewBox="0 0 24 24" className="fill-[#A5CCFF] w-full h-full">
              <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
            </svg>
          </div>
          <span className="font-bold text-xl text-[#1a1a1a] tracking-tight">
            Unlock Wealth Digital
          </span>
        </div>

        {/* Links Section */}
        <ul className="flex items-center gap-10">
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
      </nav>
    </div>
  );
}

export default Navbar;
