import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import Ecommerce from "../../assets/ecommerce.svg";
import Report from "../../assets/website.svg";
import Stat from "../../assets/online_resume.svg";

function TailoredSolutions() {
  const { t, i18n } = useTranslation();

  const solutions = [
    {
      id: 1,
      title: t("solutions.items.0.title"),
      target: t("solutions.items.0.target"),
      experience: t("solutions.items.0.experience"),
    },
    {
      id: 2,
      title: t("solutions.items.1.title"),
      target: t("solutions.items.1.target"),
      experience: t("solutions.items.1.experience"),
    },
    {
      id: 3,
      title: t("solutions.items.2.title"),
      target: t("solutions.items.2.target"),
      experience: t("solutions.items.2.experience"),
    },
    {
      id: 4,
      title: t("solutions.items.3.title"),
      target: t("solutions.items.3.target"),
      experience: t("solutions.items.3.experience"),
    },
    {
      id: 5,
      title: t("solutions.items.4.title"),
      target: t("solutions.items.4.target"),
      experience: t("solutions.items.4.experience"),
    },
  ];

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full py-24 md:py-40 px-6 bg-linear-to-br from-[#99C8FF] via-white to-[#99C8FF] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Side: Text Solutions */}
          <div className="flex-1 space-y-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-black font-bold tracking-[0.4em] uppercase text-xs block">
                Strategic Approach
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-black via-white to-black italic uppercase tracking-tighter leading-none">
                {t("solutions.main_title")}
              </h2>
            </motion.div>

            <div className="space-y-20">
              {solutions.map((sol) => (
                <motion.div
                  key={`${i18n.language}-${sol.id}`}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="group relative pl-12 border-l border-black/70 hover:border-black transition-colors duration-500"
                >
                  {/* Number Accent */}
                  <div className="absolute -left-[1.15rem] top-0 w-9 h-9 bg-[#002B5B] border border-white/10 flex items-center justify-center rounded-full text-[#00CCFF] text-xs font-black group-hover:border-[#00CCFF] group-hover:shadow-[0_0_15px_rgba(0,204,255,0.3)] transition-all">
                    {sol.id}
                  </div>

                  <h3 className="text-2xl md:text-4xl font-black text-blue-700 uppercase tracking-tight mb-6 group-hover:text-blue-900 transition-colors">
                    {sol.title}
                  </h3>

                  <div className="space-y-6">
                    <div className="space-y-1">
                      <p className="text-black text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                        {t("solutions.labels.target")}
                      </p>
                      <p className="text-lg md:text-xl text-black/80 font-medium leading-relaxed">
                        {sol.target}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-black text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                        {t("solutions.labels.experience")}
                      </p>
                      <p className="text-lg md:text-xl text-black/80 leading-relaxed italic">
                        {sol.experience}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Sticky Visuals (Refined) */}
          <div className="hidden lg:block lg:w-[40%] relative">
            <div className="sticky top-40 flex flex-col items-center">
              {/* Main Image with Glassmorphism */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              >
                <img src={Ecommerce} alt="Visual Decor" />

                {/* Float Elements */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#00CCFF]/20 blur-2xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00CCFF]/10 blur-3xl rounded-full" />
              </motion.div>

              {/* Minimalist Text Decoration */}
              <div className="mt-16 text-center space-y-2 opacity-20">
                <p className="text-black text-xs font-black tracking-[0.5em] uppercase">
                  Tailored For Success
                </p>
                <div className="w-px h-20 bg-linear-to-b from-black to-transparent mx-auto" />
              </div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              >
                <img src={Report} alt="Visual Decor" />

                {/* Float Elements */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#00CCFF]/20 blur-2xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00CCFF]/10 blur-3xl rounded-full" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                }}
              >
                <img src={Stat} alt="Visual Decor" className="mt-80" />

                {/* Float Elements */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#00CCFF]/20 blur-2xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00CCFF]/10 blur-3xl rounded-full" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TailoredSolutions;
