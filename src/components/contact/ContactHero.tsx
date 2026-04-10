import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function ContactHero() {
  const { t, i18n } = useTranslation();

  return (
    <section className="relative w-full pt-48 pb-24 px-6 bg-linear-to-br from-[#99C8FF] via-white to-[#99C8FF] overflow-hidden">
      {/* Background Abstract Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="black"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Main Title */}
          <motion.div
            key={i18n.language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-[9rem] font-black text-black leading-none tracking-tighter uppercase italic">
              CONTACT <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-black via-white to-black">
                {" "}
                US
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-blue-700 text-sm md:text-lg max-w-xl font-medium tracking-wide leading-relaxed"
          >
            {t("contacthero.description")}
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-20 h-1 bg-blue-950 rounded-full"
          />
        </div>
      </div>

      {/* Side Accents */}
      <div className="absolute top-1/2 -left-20 w-64 h-64 bg-[#00CCFF]/5 blur-[100px] rounded-full" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#00CCFF]/5 blur-[120px] rounded-full" />
    </section>
  );
}

export default ContactHero;
