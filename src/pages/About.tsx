import { motion, type Variants } from "framer-motion";
import HelenPhoto from "../assets/helen.jpg";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const {t} = useTranslation();

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="bg-linear-to-br from-[#99C8FF] via-white to-[#99C8FF] min-h-screen text-white pt-28 md:pt-40 pb-20 overflow-hidden relative">
      {/* Dynamic Background Text*/}
      <div className="absolute top-20 left-10 text-[15rem] font-bold text-black opacity-[0.03] select-none pointer-events-none uppercase italic leading-none hidden lg:block">
        Visionary
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Left: Dramatic Image Layout */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative z-10 rounded-br-[10rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={HelenPhoto}
                alt="Helen Thant"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-[#002B5B]/80 via-transparent to-transparent" />
            </div>

            {/* Vertical Name Bar*/}
            <div className="absolute -left-4 top-10 bottom-10 w-px bg-linear-to-b from-transparent via-[#00CCFF] to-transparent opacity-50" />

            {/* Design Accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#00CCFF]/20 rounded-full blur-sm" />
          </motion.div>

          {/* Right: Premium Content Layout */}
          <div className="lg:col-span-6 lg:pl-12 space-y-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.span
                variants={fadeInUp}
                className="text-blue-900 font-bold tracking-[0.4em] uppercase text-[10px] block"
              >
                Founder of Unlock Wealth Digital
              </motion.span>

              {/* Header */}
              <motion.h1
                variants={fadeInUp}
                className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-linear-to-r from-black via-white to-black"
              >
                HELEN <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-black via-white to-black">
                  THANT
                </span>
              </motion.h1>

              <motion.div
                variants={fadeInUp}
                className="w-20 h-1 bg-[#00CCFF] mt-6"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="space-y-6 text-black/80 text-base md:text-lg leading-relaxed italic font-medium">
                <p>
                  {t("about.title")}
                </p>
                
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
