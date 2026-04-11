import { motion } from "framer-motion";
import LogoCircle from "../../assets/logo.png";
import {
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-white py-8 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Brand Container with Background */}
        <div className="relative flex items-center p-1 group">
          {/* Background Glow/Circle */}
          <div className="absolute inset-0 bg-linear-to-r from-[#99C8FF] via-[#99C8FF]/40 to-transparent rounded-full blur-[2px] opacity-80 pointer-events-none" />

          {/* Content: Logo + Text */}
          <div className="relative flex items-center gap-3 pl-2 pr-6 py-1.5">
            {/* Logo */}
            <img
              src={LogoCircle}
              alt="Logo"
              className="w-10 h-10 object-contain drop-shadow-sm"
            />

            {/* Vertical Line */}
            <div className="h-6 w-px bg-blue-900/20" />

            {/* Text */}
            <span className="text-blue-900 text-[11px] tracking-[0.2em] uppercase font-black">
              Unlock Wealth Digital
            </span>
          </div>
        </div>

        {/* Center: Contact Info */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-center">
          <div className="space-y-1">
            <p className="text-md font-bold text-black uppercase tracking-widest">
              Email
            </p>
            <p className="text-md font-medium text-blue-900">
              unlockwealthdigital@gmail.com
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-md font-bold text-black uppercase tracking-widest">
              WhatsApp
            </p>
            <p className="text-md font-medium text-blue-900">+971 504632722</p>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-3">
          {[
            {
              icon: <FaFacebookF size={14} />,
              url: "https://www.facebook.com/helenthant8",
              color: "#1877F2",
            },
            {
              icon: <FaTiktok size={14} />,
              url: "https://www.tiktok.com/@unlock.wealth.digital?_r=1&_t=ZS-95G7HiUypaz",
              color: "#000000",
            },

            {
              icon: <FaWhatsapp size={16} />,
              url: "https://wa.me/971504632722",
              color: "#25D366",
            },
            { icon: <FaLinkedinIn size={14} />, url: "#", color: "#0A66C2" },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              style={{ color: social.color }}
              className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 hover:shadow-md transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-200/50 relative px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase text-center md:text-left">
            © {new Date().getFullYear()} All Rights Reserved
          </p>

          <p className="text-[10px] text-blue-900 font-black tracking-[0.3em] uppercase text-center md:text-right">
            Crafted by Unlock Wealth Digital
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
