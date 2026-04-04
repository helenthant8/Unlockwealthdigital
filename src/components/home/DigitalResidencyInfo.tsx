import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import BusinessWoman from "../../assets/businesswoman.jpg";

function DigitalResidencyInfo() {
  const { t } = useTranslation();

  const features = t("residency.features", { returnObjects: true }) as string[];

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const staggerContainer: Variants = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="w-full bg-welcome-gradient py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
        {/* Left Column */}
        <motion.div
          className="relative group flex justify-center lg:justify-start order-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative p-1.5 rounded-[40px] bg-hero-border-gradient w-full max-w-125">
            <div className="relative bg-white rounded-[2.4rem] overflow-hidden aspect-137.5/150 shadow-xl">
              <img
                src={BusinessWoman}
                alt="Unlock Wealth Digital Residency"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-40 bg-brand-blue/20 blur-2xl -z-10"></div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="space-y-8 md:space-y-12 order-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main Title */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <h2 className="text-4xl md:text-[50px] font-black text-[#1a1a1a] tracking-tight leading-[1.2] uppercase italic">
              {t("residency.title")}
            </h2>
          </motion.div>

          {/* Features Box */}
          <motion.div
            variants={fadeInUp}
            className="border-t border-gray-200 pt-8 md:pt-10"
          >
            <div className="border border-gray-200 rounded-[2.5rem] p-8 md:p-12 bg-white/40 backdrop-blur-sm shadow-sm">
              <ul className="space-y-5">
                {Array.isArray(features) &&
                  features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-lg md:text-xl text-gray-800 font-medium flex items-center"
                    >
                      <span className="inline-block w-2.5 h-2.5 bg-black mr-4 shrink-0"></span>
                      {feature}
                    </li>
                  ))}
              </ul>
            </div>
          </motion.div>

          {/* Availability Text */}
          <motion.div variants={fadeInUp} className="pt-2">
            <p className="text-2xl md:text-3xl text-gray-900 font-bold leading-tight max-w-lg italic">
              {t("residency.availability")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default DigitalResidencyInfo;
