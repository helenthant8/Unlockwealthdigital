import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import Partical from "../../utils/Partical";

function ServiceHero() {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full px-6 pt-32 pb-16 md:pt-48 md:pb-24 bg-linear-to-br from-[#99C8FF] via-white to-[#99C8FF]">
      <motion.div
        className="max-w-7xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Background Accent */}
        <Partical />

        <div className="relative z-10 space-y-8">
          {/* Section Tag */}
          <motion.span
            variants={itemVariants}
            className="text-black font-bold tracking-[0.4em] uppercase text-xs block"
          >
            Our Expertise
          </motion.span>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-black text-black leading-[0.9] tracking-tighter uppercase italic"
          >
            {t("service_hero.title")}{" "}
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-60 h-1.5 bg-blue-700"
          />

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-blue-900 leading-relaxed max-w-4xl font-medium"
          >
            {t("service_hero.description")}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

export default ServiceHero;
