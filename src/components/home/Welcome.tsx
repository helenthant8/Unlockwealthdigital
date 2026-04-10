import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Partical from "../../utils/Partical";

function Welcome() {
  const { t } = useTranslation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="w-full bg-linear-to-br from-[#99C8FF] via-white to-[#99C8FF] opacity-90 py-20 md:py-32 px-6 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-10 right-0 w-125 h-125 bg-linear-to-br from-[#99C8FF] via-white to-white opacity-90 rounded-full pointer-events-none" />

      <div className="absolute top-100 right-0 w-125 h-125 bg-linear-to-br from-[#99C8FF] via-white to-white opacity-90 rounded-full pointer-events-none" />

      <Partical />

      <motion.div
        className="max-w-7xl mx-auto space-y-20 md:space-y-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Welcome Header & Description */}
        <div className="space-y-10">
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black text-blue-900 tracking-tighter uppercase italic leading-[1.1]">
              {t("welcome.title")}
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="space-y-8 text-lg md:text-2xl text-blue-900 leading-relaxed font-medium max-w-5xl border-l-4 border-[#00CCFF] pl-8"
          >
            <p className="leading-snug relative">
              {t("welcome.description_1")}
            </p>
            <p className="leading-snug text-blue-900 relative">
              {t("welcome.description_2")}
            </p>
          </motion.div>
        </div>
        {/* Bottom Section: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Our Mission */}
          <motion.div variants={fadeInUp} className="space-y-8 group">
            <h3 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tighter uppercase italic leading-none group-hover:text-yellow-900 transition-colors">
              {t("welcome.mission_title")}
            </h3>

            <div className="w-full border-t border-blue-900 pt-10">
              <p className="text-lg md:text-xl text-blue-900 leading-relaxed max-w-md font-medium">
                {t("welcome.mission_text")}
              </p>
            </div>
          </motion.div>

          {/* Our Vision */}
          <motion.div variants={fadeInUp} className="space-y-8 group">
            <h3 className="text-4xl md:text-5xl font-black text-blue-900  tracking-tighter uppercase italic leading-none group-hover:text-yellow-900 transition-colors relative">
              {t("welcome.vision_title")}
            </h3>
            <div className="w-full border-t text-blue-900 pt-10 relative">
              <p className="text-lg md:text-xl text-blue-900 leading-relaxed max-w-md font-medium">
                {t("welcome.vision_text")}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Welcome;
