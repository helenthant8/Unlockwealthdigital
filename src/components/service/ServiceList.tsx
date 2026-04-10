import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import Package1Img from "../../assets/sme.png";
import Package2Img from "../../assets/Wellness 1.png";

function ServiceList() {
  const { t, i18n } = useTranslation();

  const services = [
    {
      id: "One",
      title: t("service_list.items.0.title"),
      image: Package1Img,
      points: [
        {
          label: t("service_list.items.0.points.0.label"),
          text: t("service_list.items.0.points.0.text"),
        },
        {
          label: t("service_list.items.0.points.1.label"),
          text: t("service_list.items.0.points.1.text"),
        },
        {
          label: t("service_list.items.0.points.2.label"),
          text: t("service_list.items.0.points.2.text"),
        },
        {
          label: t("service_list.items.0.points.3.label"),
          text: t("service_list.items.0.points.3.text"),
        },
      ],
    },
    {
      id: "Two",
      title: t("service_list.items.1.title"),
      image: Package2Img,
      points: [
        {
          label: t("service_list.items.1.points.0.label"),
          text: t("service_list.items.1.points.0.text"),
        },
        {
          label: t("service_list.items.1.points.1.label"),
          text: t("service_list.items.1.points.1.text"),
        },
        {
          label: t("service_list.items.1.points.2.label"),
          text: t("service_list.items.1.points.2.text"),
        },
        {
          label: t("service_list.items.1.points.3.label"),
          text: t("service_list.items.1.points.3.text"),
        },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full py-24 px-6 bg-linear-to-br from-[#99C8FF] via-white to-[#99C8FF] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with Accent */}
        <motion.div
          className="mb-10 flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-black font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
            Solutions We Provide
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-black via-white to-black italic uppercase tracking-tighter leading-[0.9]">
            {t("service_list.section_title")}
          </h2>
        </motion.div>

        <motion.div
          key={`list-${i18n.language}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-32"
        >
          {services.map((service, index) => (
            <motion.div
              key={`${i18n.language}-${service.id}`}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-16`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-10">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-black via-white to-black uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <div className="w-20 h-1.5 bg-black" />
                </div>

                <ul className="space-y-5">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0 group-hover:scale-[2.5] transition-all duration-300 shadow-[0_0_10px_#00CCFF]" />
                      <p className="text-lg md:text-xl text-blue-950 leading-relaxed">
                        <span className="font-bold text-blue-800 uppercase tracking-wide text-sm block mb-1">
                          {point.label}
                        </span>
                        {point.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Side with Premium Effects */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                className="flex-1 w-full relative"
              >
                {/* Glow Background */}
                <div className="absolute -inset-4 bg-[#00CCFF]/10 blur-[80px] rounded-full pointer-events-none" />

                <div className="relative p-1 rounded-[2.5rem] bg-linear-to-br from-white/10 to-transparent border border-white/5 backdrop-blur-sm shadow-2xl overflow-hidden">
                  <div className="rounded-[2.2rem] overflow-hidden bg-[#002B5B]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover grayscale-40 hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceList;
