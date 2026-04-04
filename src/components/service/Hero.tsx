import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

function ServiceHero() {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="w-full px-6 py-12 md:py-20">
      <motion.div
        className="max-w-7xl mx-auto bg-linear-to-br from-[#B4D4FF] via-[#E5F1FF] to-white rounded-[40px] p-10 md:p-20 shadow-sm"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-10 tracking-tight"
        >
          {t("service_hero.title")} 🚀
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-5xl font-medium"
        >
          {t("service_hero.description")}
        </motion.p>
      </motion.div>
    </section>
  );
}

export default ServiceHero;
