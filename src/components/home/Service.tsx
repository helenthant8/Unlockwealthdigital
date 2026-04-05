import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import Service1 from "../../assets/sevice1.jpg";
import Service2 from "../../assets/service2.jpg";
import Service3 from "../../assets/service3.jpg";

function Service() {
  const { t } = useTranslation();
  const images = [Service1, Service2, Service3];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
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
    <section className="max-w-7xl mx-auto py-18 px-6 space-y-14 overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-medium text-center text-gray-900 tracking-tight"
      >
        {t("services.main_title")}
      </motion.h2>

      {/* Cards Row */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="relative group"
          >
            <div className="absolute -inset-0.5 service-card-glow rounded-[2.5rem] opacity-80 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative bg-white rounded-[2.4rem] overflow-hidden h-64 md:h-60 flex items-center justify-center p-1">
              <img
                src={img}
                alt={`Service ${index + 1}`}
                className="w-full h-full object-cover rounded-[2.2rem]"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pricing Banner */}
      <motion.div
        className="max-w-5xl mx-auto mt-12 px-2"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="relative border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm">
          <div className="absolute inset-0 bg-banner-soft-blue w-full md:w-1/2 pointer-events-none opacity-50"></div>

          <div className="relative px-6 py-8 md:px-12 md:py-10 flex flex-col gap-4">
            <h3 className="text-3xl font-black text-[#1a1a1a] tracking-tighter uppercase italic leading-tight flex flex-wrap items-center gap-x-4">
              {t("services.journey_start")}
            </h3>

            <p className="text-3xl font-black text-[#1a1a1a] tracking-tighter uppercase italic leading-none">
              {t("services.residency_title")}
              <span className="text-blue-700">$200</span>
            </p>

            <p className="text-3xl font-black text-blue-700 tracking-tighter uppercase italic leading-none">
              {t("services.residency_title_one")}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Service;
