import { motion } from "framer-motion";

function Welcome() {
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
            Welcome!
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="space-y-6 text-lg md:text-2xl text-gray-800 leading-relaxed font-medium max-w-5xl"
          >
            <p>
              "In a world of noise and uncertainty, your digital presence should
              be your sanctuary. We believe that your career and business are
              extensions of your inner peace."
            </p>
            <p>
              Unlock Wealth Resort Academy was founded to harmonize professional
              excellence with holistic well-being. We don’t just build websites;
              we curate digital spaces that protect your energy and reflect your
              true potential."
            </p>
          </motion.div>
        </div>

        {/* Bottom Section: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 pt-10 border-t border-gray-100/50">
          {/* Our Mission */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-5xl font-black text-[#1a1a1a] tracking-tighter uppercase italic leading-none">
              Our mission
            </h3>
            <div className="w-full border-t border-soft-blue pt-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-md font-medium">
                "To empower individuals by building high-quality digital
                identities that harmonize professional success with mental
                well-being."
              </p>
            </div>
          </motion.div>

          {/* Our Vision */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-5xl font-black text-[#1a1a1a] tracking-tighter uppercase italic leading-none">
              Our vision
            </h3>
            <div className="w-full border-t border-soft-blue pt-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-md font-medium">
                "A world where every visionary has a serene digital home to
                thrive, regardless of the chaos in the physical world."
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Welcome;
