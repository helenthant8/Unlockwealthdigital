import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import WendyPhoto from "../../assets/nana.jpg";
import HaileyPhoto from "../../assets/kim.jpg";
import ThomasPhoto from "../../assets/Thomas.jpg";
import ReviewPhoto from "../../assets/feedback.svg";
import LeafSVG from "../../assets/faq.svg";
import Partical from "../../utils/Partical";

interface Review {
  quote: string;
  name: string;
  photo?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

function ResortReviewsAndFaqs() {
  const { t } = useTranslation();

  const reviewPhotos = [WendyPhoto, HaileyPhoto, ThomasPhoto];
  const reviewsData = t("reviews_faqs.reviews_list", {
    returnObjects: true,
  }) as Review[];

  const reviews = Array.isArray(reviewsData)
    ? reviewsData.map((review, index) => ({
        ...review,
        photo: reviewPhotos[index],
      }))
    : [];

  const faqs = t("reviews_faqs.faqs_list", { returnObjects: true }) as FAQ[];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="w-full bg-linear-to-br from-[#99C8FF] via-white to-[#99C8FF] opacity-90 py-16 md:py-32 px-6 overflow-hidden relative">
      <Partical />

      <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
        {/* --- SECTION 1: REVIEWS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          {/* Header Area */}
          <div className="lg:pr-20 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-blue-900 font-bold tracking-[0.2em] text-xs uppercase block">
                Testimonials
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase italic leading-tight">
                {t("reviews_faqs.reviews_title")}
              </h2>
            </motion.div>

            {/* Decoration Image - Desktop Only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-sm hidden lg:block"
            >
              <img src={ReviewPhoto} alt="Review Decoration" />
            </motion.div>
          </div>

          {/* Reviews List Area */}
          <div className="lg:pl-16">
            <motion.div
              className="space-y-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col md:flex-row gap-5 items-start relative pb-8 border-b border-blue-200/50 last:border-0"
                >
                  <div className="w-14 h-14 shrink-0">
                    <img
                      src={review.photo}
                      className="w-full h-full object-cover rounded-full border-2 border-blue-400"
                      alt={review.name}
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg text-black leading-relaxed font-medium italic">
                      "{review.quote}"
                    </p>
                    <p className="text-lg font-black text-blue-900 tracking-tight uppercase">
                      {review.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- SECTION 2: FAQS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          {/* Header Area */}
          <div className="lg:pr-20 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-blue-900 font-bold tracking-[0.2em] text-xs uppercase block">
                Common Questions
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase italic leading-tight">
                {t("reviews_faqs.faqs_title")}
              </h2>
            </motion.div>

            {/* Leaf Image - Desktop Only */}
            <motion.div
              animate={{ rotate: [0, 5, 0], y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:block pt-10"
            >
              <img src={LeafSVG} className="w-48" alt="Leaf" />
            </motion.div>
          </div>

          {/* FAQs List Area */}
          <div className="lg:pl-16">
            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/30 p-6 rounded-2xl border border-blue-100"
                >
                  <h4 className="text-lg font-bold text-black flex gap-2">
                    <span className="text-blue-600">Q.</span> {faq.question}
                  </h4>
                  <p className="text-base text-gray-700 mt-2 pl-6">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResortReviewsAndFaqs;
