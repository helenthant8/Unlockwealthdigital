import { motion, type Variants } from "framer-motion";
import WendyPhoto from "../../assets/pp1.jpg";
import HaileyPhoto from "../../assets/pp2.jpg";
import ThomasPhoto from "../../assets/pp3.jpg";
import ResortImage from "../../assets/resort.jpg";
import LeafSVG from "../../assets/leaf.jpg";

function ResortReviewsAndFaqs() {
  const reviews = [
    {
      photo: WendyPhoto,
      quote:
        '"Starting my portfolio felt like a mountain, but the Resort made it feel like a walk in the park. I finally have a digital home I\'m proud of."',
      name: "Wendy S.",
    },
    {
      photo: HaileyPhoto,
      quote:
        '"As an introvert, I struggled to show my work. Now, my website does the talking for me. The mental support guides were a huge bonus!"',
      name: "Hailey C.",
    },
    {
      photo: ThomasPhoto,
      quote:
        '"Professional, calm, and affordable. The $100 package is exactly what SMEs in our region need right now."',
      name: "Thomas L.",
    },
  ];

  const faqs = [
    {
      question: "What exactly is included in the Residency?",
      answer:
        "You get a professional website (UI/UX optimized), a custom .com domain with hosting for 1 year, and our exclusive mental wellness guides to help you stay focused.",
    },
    {
      question: "I'm an introvert: do I need to attend many meetings?",
      answer:
        "Not at all! We use a simple text-based discovery form. We value your energy and keep the process quiet and efficient.",
    },
    {
      question: "Is there any hidden cost?",
      answer:
        "No hidden fees. The Special rate covers everything for the first year. We want to make high-quality digital presence accessible for everyone.",
    },
  ];

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  const staggerContainer: Variants = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="w-full bg-resort-full-gradient py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
        {/* Left Column */}
        <div className="flex flex-col gap-8 md:gap-12 lg:pr-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-black text-resort-blue-header tracking-tighter uppercase italic leading-[1.1]">
              Resort Reviews
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-sm aspect-square bg-white rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-white"
          >
            <img
              src={ResortImage}
              className="w-full h-full object-cover"
              alt="Resort"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pt-12 md:pt-24 space-y-4"
          >
            <h2 className="text-4xl font-black text-resort-blue-header tracking-tighter uppercase italic leading-[1.1]">
              FAQs
            </h2>
          </motion.div>

          {/* Leaf SVG */}
          <motion.div
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pt-8 md:pt-16"
          >
            <img
              src={LeafSVG}
              className="w-48 md:w-80 opacity-80 lg:block"
              alt="Leaf Decoration"
            />
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col lg:pl-16 lg:pt-10">
          {/* Reviews List */}
          <motion.div
            className="space-y-12 md:space-y-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative group"
              >
                <div className="w-20 h-20 shrink-0">
                  <img
                    src={review.photo}
                    className="w-full h-full object-cover rounded-full border-2 border-white shadow-sm"
                    alt={review.name}
                  />
                </div>
                <div className="flex-col space-y-2">
                  <p className="text-lg text-gray-800 leading-relaxed font-medium">
                    {review.quote}
                  </p>
                  <p className="text-2xl font-black text-gray-900 tracking-tight">
                    {review.name}
                  </p>
                </div>
                <div className="hidden md:block absolute -bottom-8 left-28 right-0 h-px bg-black/10"></div>
              </motion.div>
            ))}
          </motion.div>

          <div className="py-12 md:py-24"></div>

          {/* FAQs List */}
          <motion.div
            className="space-y-10 md:space-y-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="space-y-4 border-b border-black/10 pb-8 md:pb-10 last:border-0"
              >
                <h4 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                  {faq.question}
                </h4>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-16 md:pt-20 pb-10"
          >
            <button className="w-full md:w-fit bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg md:text-xl italic hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">
              "Receive Abundance Updates"
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ResortReviewsAndFaqs;
