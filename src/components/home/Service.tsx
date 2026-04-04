import { motion, type Variants } from "framer-motion";
import Service1 from "../../assets/sevice1.jpg";
import Service2 from "../../assets/service2.jpg";
import Service3 from "../../assets/service3.jpg";

function Service() {
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
        className="text-7xl font-medium text-center text-gray-900 tracking-tight"
      >
        Our Service
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
            {/* The Gradient Border Effect */}
            <div className="absolute -inset-0.5 service-card-glow rounded-[2.5rem] opacity-80 group-hover:opacity-100 transition-opacity"></div>

            {/* Content Box */}
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

      {/* Pricing Banner - Mobile Responsive Text */}
      <motion.div
        className="max-w-5xl mx-auto mt-12 px-2"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="relative border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm">
          {/* Background Blue Fade */}
          <div className="absolute inset-0 bg-banner-soft-blue w-full md:w-1/2 pointer-events-none opacity-50"></div>

          {/* Text Content */}
          <div className="relative px-6 py-8 md:px-12 md:py-10 flex flex-col gap-4">
            <h3 className="text-3xl md:text-[50px] font-black text-[#1a1a1a] tracking-tighter uppercase italic leading-none flex flex-wrap gap-x-4">
              Start Your Journey:
              <span className="line-through opacity-40">$300</span>
              <span className="text-[#3B82F6]">$200</span>
            </h3>

            <p className="text-3xl md:text-[50px] font-black text-[#1a1a1a] tracking-tighter uppercase italic leading-none">
              International Digital Residency
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Service;
