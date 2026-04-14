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
    <section className="w-full bg-linear-to-br from-[#99C8FF] via-white to-[#99C8FF] opacity-90 py-20 md:py-32 px-6 overflow-hidden relative">
      <Partical />

      <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
        {/* --- SECTION 1: REVIEWS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          {/* Header & Main Visual */}
          <div className="lg:pr-20 flex flex-col gap-10">
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

            {/* Featured Image - Mobile မှာလည်း ပေါ်မယ်၊ အရွယ်အစား မသေးတော့ဘူး */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              <img
                src={ReviewPhoto}
                alt="Review"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>

          {/* Reviews List */}
          <div className="lg:pl-16">
            <motion.div
              className="space-y-10 md:space-y-14"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col md:flex-row gap-6 items-start relative pb-10 border-b border-white/20 last:border-0"
                >
                  <div className="w-16 h-16 shrink-0 relative">
                    <div className="absolute inset-0 bg-blue-900 rounded-full blur-md opacity-20" />
                    <img
                      src={review.photo}
                      className="w-full h-full object-cover rounded-full border-2 border-[#00CCFF] relative z-10"
                      alt={review.name}
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="text-lg text-black leading-relaxed font-medium italic">
                      "{review.quote}"
                    </p>
                    <p className="text-xl font-black text-blue-900 tracking-tight uppercase">
                      {review.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- SECTION 2: FAQS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          {/* Header & Decoration */}
          <div className="lg:pr-20 flex flex-col gap-10">
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

            {/* Leaf Decoration - Mobile မှာလည်း ပေါ်မယ် */}
            <motion.div
              animate={{ rotate: [0, 5, 0], y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full"
            >
              <img
                src={LeafSVG}
                className="w-full h-auto object-contain"
                alt="FAQ decoration"
              />
            </motion.div>
          </div>

          {/* FAQs List */}
          <div className="lg:pl-16">
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {Array.isArray(faqs) &&
                faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="space-y-3 p-6 rounded-2xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/20"
                  >
                    <h4 className="text-xl font-bold text-black tracking-tight flex gap-3">
                      <span className="text-black">Q.</span> {faq.question}
                    </h4>
                    <p className="text-base text-blue-900 leading-relaxed pl-7">
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
