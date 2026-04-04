import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import Package1Img from "../../assets/package1.jpg";
import Package2Img from "../../assets/package2.jpg";

function ServiceList() {
  const { t, i18n } = useTranslation();

  const services = [
    {
      id: 1,
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
      id: 2,
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
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          key={`title-${i18n.language}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16"
        >
          {t("service_list.section_title")}
        </motion.h2>

        <motion.div
          key={`list-${i18n.language}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={`${i18n.language}-${service.id}`}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-12 lg:gap-20`}
            >
              <div className="flex-1 space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {service.id}. {service.title}
                </h3>
                <ul className="space-y-6">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 shrink-0 group-hover:scale-150 transition-transform" />
                      <p className="text-lg md:text-xl text-gray-700 leading-snug">
                        <span className="font-bold text-gray-900">
                          {point.label}:
                        </span>{" "}
                        {point.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex-1 w-full max-w-lg"
              >
                <div className="relative p-2 rounded-[2.5rem] bg-linear-to-br from-blue-400 via-purple-400 to-cyan-300 shadow-xl">
                  <div className="bg-white rounded-[1.8rem] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover"
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
