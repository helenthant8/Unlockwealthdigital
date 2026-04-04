import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Welcome() {
  const { t } = useTranslation();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="w-full bg-welcome-gradient py-16 md:py-24 px-6 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto space-y-16 md:space-y-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Welcome Header & Description */}
        <div className="space-y-8 md:space-y-12">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl font-black text-[#1a1a1a] tracking-tighter uppercase italic leading-none"
          >
            {t("welcome.title")}
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="space-y-6 text-lg md:text-2xl text-gray-800 leading-relaxed font-medium max-w-5xl"
          >
            <p>{t("welcome.description_1")}</p>
            <p>{t("welcome.description_2")}</p>
          </motion.div>
        </div>

        {/* Bottom Section: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 pt-10 border-t border-gray-100/50">
          {/* Our Mission */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-5xl font-black text-[#1a1a1a] tracking-tighter uppercase italic leading-none">
              {t("welcome.mission_title")}
            </h3>
            <div className="w-full border-t border-soft-blue pt-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-md font-medium">
                {t("welcome.mission_text")}
              </p>
            </div>
          </motion.div>

          {/* Our Vision */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-5xl font-black text-[#1a1a1a] tracking-tighter uppercase italic leading-none">
              {t("welcome.vision_title")}
            </h3>
            <div className="w-full border-t border-soft-blue pt-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-md font-medium">
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
