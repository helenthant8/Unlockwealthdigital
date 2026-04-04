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

  return (
    <section className="w-full bg-resort-full-gradient py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Left Column */}
        <div className="flex flex-col gap-12 pr-20">
          <div className="space-y-4">
            <h2 className="text-6xl font-black text-resort-blue-header tracking-tighter uppercase italic leading-[1.1]">
              Resort <br /> Reviews
            </h2>
          </div>

          <div className="w-96 h-96 bg-white rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-white">
            <img
              src={ResortImage}
              className="w-full h-full object-cover"
              alt="Resort"
            />
          </div>

          <div className="pt-24 space-y-4">
            <h2 className="text-6xl font-black text-resort-blue-header tracking-tighter uppercase italic leading-[1.1]">
              FAQs
            </h2>
          </div>

          <div className="pt-16">
            <img
              src={LeafSVG}
              className="w-80 opacity-80"
              alt="Leaf Decoration"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col pl-16 pt-10">
          {/* Reviews List */}
          <div className="space-y-16">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex gap-8 items-start relative group"
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
                {/* Separator line with very low opacity to blend with blue bg */}
                <div className="absolute -bottom-8 left-28 right-0 h-px bg-black/10"></div>
              </div>
            ))}
          </div>

          <div className="py-24"></div>

          {/* FAQs List */}
          <div className="space-y-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="space-y-4 border-b border-black/10 pb-10 last:border-0"
              >
                <h4 className="text-2xl font-black text-gray-900 tracking-tight">
                  {faq.question}
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-20 pb-10">
            <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-xl italic hover:bg-gray-900 transition-colors">
              "Receive Abundance Updates"
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResortReviewsAndFaqs;
