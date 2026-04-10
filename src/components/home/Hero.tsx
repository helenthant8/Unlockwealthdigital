import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Partical from "../../utils/Partical";

function Hero() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden p-20">
      {/* --- Gradient & Particle Background --- */}
      {/* Background Abstract Grid */}
      <div className="absolute inset-0 z-0">
        {/* Main Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-[#99C8FF] via-white to-[#99C8FF] opacity-90" />

        <Partical />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col space-y-10 items-center">
          <motion.div
            variants={itemVariants}
            className="space-y-6 flex flex-col items-center"
          >
            {/* Animated Tag */}
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-5 py-2 rounded-full border border-blue-900 bg-blue-900 text-yellow-500 text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md"
            >
              Elevating Your Vision
            </motion.span>

            {/* Gradient Text Header */}
            <h1 className="text-6xl lg:text-9xl font-black leading-none tracking-tighter text-white">
              <span className="bg-linear-to-r from-black via-blue-600 to-black bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </h1>

            <div className="max-w-3xl mx-auto">
              <p className="text-xl lg:text-3xl font-semibold leading-snug">
                {t("hero.description_one")}
              </p>
              <p className="text-lg bg-linear-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-transparent mt-4 font-medium opacity-80">
                {t("hero.description_two")}
              </p>
            </div>
          </motion.div>

          {/* Buttons with Gradient & Hover Effects */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 justify-center pt-8"
          >
            <Link to="/service">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(0, 204, 255, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-xl transition-all"
              >
                {t("hero.cta_button")}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* <div className="inset-0 bg-[#00CCFF] opacity-90" /> */}
    </section>
  );
}

export default Hero;
