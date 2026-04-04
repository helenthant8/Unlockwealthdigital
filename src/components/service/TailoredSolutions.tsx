import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import LaptopImg from "../../assets/service2.jpg";
import LeafDecor from "../../assets/leaf.jpg";
import EnergyPortal from "../../assets/energy-portal.jpg";

function TailoredSolutions() {
  const { t, i18n } = useTranslation();

  // Array ကို hardcode key များဖြင့် ဆောက်ထားခြင်းက re-render ဖြစ်တိုင်း translation အသစ်ကို ဆွဲယူစေပါတယ်
  const solutions = [
    {
      id: 1,
      title: t("solutions.items.0.title"),
      target: t("solutions.items.0.target"),
      experience: t("solutions.items.0.experience"),
      decor: LaptopImg,
    },
    {
      id: 2,
      title: t("solutions.items.1.title"),
      target: t("solutions.items.1.target"),
      experience: t("solutions.items.1.experience"),
      decor: LeafDecor,
    },
    {
      id: 3,
      title: t("solutions.items.2.title"),
      target: t("solutions.items.2.target"),
      experience: t("solutions.items.2.experience"),
      decor: LeafDecor,
    },
    {
      id: 4,
      title: t("solutions.items.3.title"),
      target: t("solutions.items.3.target"),
      experience: t("solutions.items.3.experience"),
      decor: EnergyPortal,
    },
    {
      id: 5,
      title: t("solutions.items.4.title"),
      target: t("solutions.items.4.target"),
      experience: t("solutions.items.4.experience"),
      decor: EnergyPortal,
    },
  ];

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-24 px-6 bg-[#FDFBF2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Text Solutions */}
          <div className="flex-1 space-y-20">
            <motion.h2
              key={i18n.language}
              className="text-3xl font-medium text-gray-800 flex items-center gap-2 mb-12"
            >
              🎯 {t("solutions.main_title")}
            </motion.h2>

            {solutions.map((sol) => (
              <motion.div
                key={`${i18n.language}-${sol.id}`} // Language key ထည့်ခြင်းဖြင့် စာသားအသစ်ဝင်စေပါသည်
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="space-y-4 border-l-2 border-blue-200 pl-8 relative"
              >
                {/* Number Bullet */}
                <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-blue-400" />

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  {sol.id}. {sol.title}
                </h3>

                <div className="space-y-4 pt-2">
                  <p className="text-xl md:text-2xl text-gray-800">
                    <span className="font-bold underline decoration-blue-300 underline-offset-4">
                      {t("solutions.labels.target")}:
                    </span>{" "}
                    {sol.target}
                  </p>
                  <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                    <span className="font-bold underline decoration-blue-300 underline-offset-4">
                      {t("solutions.labels.experience")}:
                    </span>{" "}
                    {sol.experience}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Sticky Visuals */}
          <div className="hidden lg:block lg:w-1/3 relative">
            <div className="sticky top-32 flex flex-col items-center gap-20">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "easeInOut",
                }}
                className="w-full max-w-xs p-2 rounded-3xl bg-linear-to-tr from-purple-400 to-blue-300 shadow-2xl"
              >
                <img
                  src={LaptopImg}
                  alt="Visual Decor"
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </motion.div>

              <img
                src={LeafDecor}
                alt="Decor"
                className="w-64 opacity-60 hover:opacity-100 transition-opacity duration-500"
              />

              <div className="w-64 h-96 rounded-full bg-linear-to-b from-blue-100 to-blue-400/20 blur-xl absolute -z-10 bottom-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TailoredSolutions;
