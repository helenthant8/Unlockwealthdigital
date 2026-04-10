import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LogoCircle from "../../assets/logo.png";
import {
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-white py-8 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="absolute top-1 left-30 w-70 h-25 bg-linear-to-br from-[#99C8FF] via-white to-[#99C8FF] opacity-90 rounded-full pointer-events-none" />
        {/* Left: Brand Slim */}
        <div className="flex items-center gap-4 relative">
          <img
            src={LogoCircle}
            alt="Logo"
            className="w-12 h-auto brightness-200 opacity-80"
          />
          <div className="h-8 w-px bg-white/10 hidden md:block" />
          <span className="text-blue-900 text-[10px] tracking-[0.2em] uppercase font-bold">
            Unlock Wealth Digital
          </span>
        </div>

        {/* Center: Contact Info (Inline) */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-center">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-black uppercase tracking-widest">
              Email
            </p>
            <p className="text-sm font-medium text-black">
              helenthant369@gmail.com
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-black uppercase tracking-widest">
              WhatsApp
            </p>
            <p className="text-sm font-medium text-black">+971 504632722</p>
          </div>
        </div>

        {/* Right: Social Icons (Small) */}
        <div className="flex gap-3">
          {[
            { icon: <FaFacebookF size={14} />, url: "#" },
            { icon: <FaTiktok size={14} />, url: "#" },
            { icon: <FaWhatsapp size={16} />, url: "#" },
            { icon: <FaLinkedinIn size={14} />, url: "#" },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#00CCFF" }}
              className="w-9 h-9 bg-black/50 text-black rounded-full flex items-center justify-center border border-black/10 hover:border-[#00CCFF]/50 transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Very Bottom: Copyright (Tiny) */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-blue-900 flex justify-center relative">
        <p className="text-[9px] text-black font-bold tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} Crafted by Unlock Wealth Digital
        </p>
      </div>
    </footer>
  );
}

export default Footer;
