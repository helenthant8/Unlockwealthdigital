import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function ContactHero() {
  const { t, i18n } = useTranslation();

  return (
    <section className="pt-32 pb-16 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          key={i18n.language}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-8xl font-black text-gray-900 uppercase italic tracking-tighter mb-6"
        >
          {t("contacthero.title")}
        </motion.h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-medium">
          {t("contacthero.description")}
        </p>
      </div>
    </section>
  );
}

export default ContactHero;
