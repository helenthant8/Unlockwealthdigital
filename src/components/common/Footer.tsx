import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import HelenPhoto from "../../assets/helen.jpg";
import LogoCircle from "../../assets/logo.png";
import {
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const { t, i18n } = useTranslation();

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const staggerContainer: Variants = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <footer className="w-full bg-resort-gradient pt-16 md:pt-24 pb-12 md:pb-16 px-6 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {/* Top Section */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h2
            key={i18n.language}
            className="text-[50px] font-black text-blue-600 tracking-tighter uppercase italic leading-none"
          >
            {t("footer.connect_title")}
          </h2>
          <div className="w-full h-px bg-gray-200 mt-6 md:mt-10"></div>
        </motion.div>

        {/* Middle Section: Guide Info */}
        <div className="mb-16 md:mb-20">
          <motion.h3
            variants={fadeInUp}
            className="text-2xl md:text-3xl text-gray-700 mb-8 md:mb-10 text-center lg:text-left"
          >
            {t("footer.guide_title")}
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Logo */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-3 flex justify-center lg:justify-start"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 shrink-0">
                <img
                  src={LogoCircle}
                  alt="Resort Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Introduction */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-5 text-center lg:text-left"
            >
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium italic">
                "{t("footer.intro_text")}"
              </p>
            </motion.div>

            {/* Photo */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-4 flex justify-center lg:justify-end"
            >
              <div className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-white border-8 md:border-12 max-w-70 md:max-w-sm">
                <img
                  src={HelenPhoto}
                  alt="Helen at work"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Information Row */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-4 pt-12 border-t border-gray-100"
        >
          {/* Phone Info */}
          <div className="space-y-2 md:space-y-4">
            <h4 className="text-2xl font-black text-gray-900 uppercase italic tracking-tighter">
              {t("footer.labels.phone")}
            </h4>
            <p className="text-xl md:text-2xl font-medium text-gray-800 tracking-tight">
              +971 504632722
            </p>
          </div>

          {/* Email Info */}
          <div className="space-y-2 md:space-y-4">
            <h4 className="text-2xl font-black text-gray-900 uppercase italic tracking-tighter">
              {t("footer.labels.email")}
            </h4>
            <p className="text-xl md:text-2xl font-medium text-gray-800 tracking-tight break-all">
              helenthant369@gmail.com
            </p>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4 md:space-y-6 w-full md:w-auto">
            <h4 className="text-2xl font-black text-gray-900 uppercase italic tracking-tighter leading-none">
              {t("footer.labels.social")}
            </h4>
            <div className="flex gap-4">
              {[
                {
                  icon: <FaFacebookF size={18} />,
                  bg: "bg-blue-600",
                  url: "https://www.facebook.com/share/18cojRAkzs/?mibextid=wwXIfr",
                },
                {
                  icon: <FaTiktok size={18} />,
                  bg: "bg-black",
                  url: "https://www.tiktok.com/@unlock.wealth.digital?_r=1&_t=ZS-95G7HiUypaz",
                },
                {
                  icon: <FaWhatsapp size={22} />,
                  bg: "bg-green-500",
                  url: "https://wa.me/971504632722",
                },
                {
                  icon: <FaLinkedinIn size={18} />,
                  bg: "bg-blue-400",
                  url: "#",
                },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 md:w-12 md:h-12 ${social.bg} text-white rounded-full flex items-center justify-center cursor-pointer shadow-md`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
