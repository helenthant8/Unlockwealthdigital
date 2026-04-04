import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const infoItems = [
  {
    icon: <FaEnvelope />,
    title: "Email Me",
    detail: "helenthant369@gmail.com",
    color: "bg-blue-100 text-blue-600",
    link: "mailto:helenthant369@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "WhatsApp",
    detail: "+971 504632722",
    color: "bg-green-100 text-green-600",
    link: "https://wa.me/971504632722",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    detail: "Dubai, United Arab Emirates",
    color: "bg-purple-100 text-purple-600",
    link: "https://www.google.com/maps/search/?api=1&query=Dubai,+United+Arab+Emirates",
  },
];

function ContactInfo() {
  return (
    <div className="space-y-12 lg:pt-10">
      {infoItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start gap-6 group"
        >
          {/* Icon Section */}
          <div
            className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
          >
            {item.icon}
          </div>

          {/* Text & Link Section */}
          <div>
            <h4 className="text-2xl font-bold text-gray-900">{item.title}</h4>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-600 hover:text-blue-500 transition-colors duration-300 block mt-1"
            >
              {item.detail}
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ContactInfo;
