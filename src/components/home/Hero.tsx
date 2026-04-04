import { motion } from "framer-motion";
import Herophoto from "../../assets/hero.jpg";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-16 flex flex-col lg:flex-row items-center justify-between min-h-[70vh] gap-10">
      {/* Left Content */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col gap-10 order-2 lg:order-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-4">
          <h1 className="text-5xl md:text-[90px] font-bold text-hero-dark leading-[1.1] tracking-tight">
            Unlock Your <br />
            <span className="inline-block mb-5">Digital Home</span>
          </h1>

          <p className="text-xl md:text-3xl text-hero-dark/80 font-normal leading-relaxed max-w-md">
            A sanctuary for your professional and inner growth.
          </p>
        </div>

        {/* Separator Line */}
        <div className="w-full lg:w-separator h-px bg-gray-200"></div>

        {/* CTA Button */}
        <button className="group w-fit flex items-center gap-4 bg-cta-gradient border border-brand-blue/40 px-8 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all">
          <div className="text-brand-blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 22C12 22 19 18 19 12C19 6 12 2 12 2C12 2 5 6 5 12C5 18 12 22 12 22Z"
                opacity="0.5"
              />
              <path d="M12 18C14.2091 18 16 16.2091 16 14C16 11.7909 14.2091 10 12 10C9.79086 10 8 11.7909 8 14C8 16.2091 9.79086 18 12 18Z" />
            </svg>
          </div>
          <span className="font-bold text-hero-dark text-lg">
            For your Professional Website
          </span>
        </button>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative p-1.5 rounded-[40px] bg-hero-border-gradient w-full max-w-137.5">
          {/* Inner Image Container */}
          <div className="bg-[#FDFBF2] rounded-[34px] overflow-hidden aspect-137.5/112.5 shadow-inner">
            <img
              src={Herophoto}
              alt="Digital Workspace"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Accent */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-40 bg-brand-blue/20 blur-2xl -z-10"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
