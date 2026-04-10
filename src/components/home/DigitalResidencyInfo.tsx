import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import BusinessWoman from "../../assets/1.svg";
import Partical from "../../utils/Partical";

function DigitalResidencyInfo() {
  const { t } = useTranslation();
  const features = t("residency.features", { returnObjects: true }) as string[];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-linear-to-br from-[#99C8FF] via-white to-[#99C8FF] opacity-90 py-20 md:py-28 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,204,255,0.05),transparent_50%)]" />

      <Partical />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-20 relative z-10">
        {/* Left Column - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src={BusinessWoman} alt="Digital Residency" />

          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#00CCFF] rounded-3xl -z-10 opacity-20 blur-xl" />
        </motion.div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.span
              variants={fadeInUp}
              className="text-blue-900 font-bold tracking-[0.2em] text-xs uppercase block"
            >
              Next-Gen Solutions
            </motion.span>

            {/* Syntax Error Fixed: Opening and Closing tags matched */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-black text-black leading-tight tracking-tight uppercase italic"
            >
              {t("residency.title")} <br />
              <span className="text-blue-900 not-italic">
                {t("residency.title_one")}
              </span>{" "}
              <br />
              {t("residency.title_two")}
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="w-16 h-1 bg-[#00CCFF] rounded-full"
            />
          </motion.div>

          {/* Features List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="space-y-5"
          >
            {Array.isArray(features) &&
              features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-900 transition-colors border border-transparent group"
                >
                  <div className="mt-1 w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center shrink-0 group-hover:border-white">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-white" />
                  </div>
                  <p className="text-base md:text-lg text-blue-500 font-medium leading-relaxed group-hover:text-white">
                    {feature}
                  </p>
                </motion.div>
              ))}
          </motion.div>

          {/* Status Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 pt-6"
          >
            <div className="px-4 py-1.5 rounded-full bg-blue-900 border border-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase">
              {t("residency.availability")}
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DigitalResidencyInfo;
