import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (formRef.current) {
      setIsSending(true);

      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(
          () => {
            Swal.fire({
              title: "Message Sent!",
              text: "We'll get back to you within 24 hours.",
              icon: "success",
              background: "#002B5B",
              color: "#fff",
              confirmButtonColor: "#00CCFF",
              customClass: { popup: "rounded-3xl border border-white/10" },
            });
            formRef.current?.reset();
          },
          () => {
            Swal.fire({
              title: "Error",
              text: "Please try again later.",
              icon: "error",
              background: "#002B5B",
              color: "#fff",
              confirmButtonColor: "#ef4444",
            });
          },
        )
        .finally(() => setIsSending(false));
    }
  };

  return (
    <div className="w-full bg-linear-to-br from-[#99C8FF] via-white to-[#99C8FF] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-0 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
          {/* Left Side - Luxury Dark Info */}
          <div className="lg:col-span-2 bg-linear-to-br from-[#99C8FF] via-white to-[#99C8FF] p-10 md:p-14 text-white flex flex-col relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#00CCFF]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <span className="text-black font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">
                Contact Info
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-[0.9] text-blue-950 tracking-tighter">
                Let's Build <br />{" "}
                <span className="text-blue-700">Together</span>
              </h2>
              <p className="mt-8 text-black/50 text-lg font-medium leading-relaxed">
                Take the first step toward your digital transformation. We're
                here to make it happen.
              </p>
            </div>

            <div className="mt-auto space-y-10 pt-10 relative z-10">
              {[
                {
                  icon: <FaPhone />,
                  label: "WhatsApp/Call",
                  val: "+971 504632722",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  label: "Location",
                  val: "UAE & Myanmar",
                },
                {
                  icon: <FaClock />,
                  label: "Availability",
                  val: "24/7 Support",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-black/80 border border-black-70 rounded-2xl flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-black opacity-60">
                      {item.label}
                    </p>
                    <p className="text-lg font-bold text-blue-950">
                      {item.val}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Modern Dark Form */}
          <div className="lg:col-span-3 p-10 md:p-14 lg:p-20 bg-linear-to-l from-white via-[#99C8FF] to-white opacity-90 relative">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-10 relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input
                    name="from_name"
                    type="text"
                    required
                    className="peer w-full bg-transparent border-b-2 border-black py-3 text-black outline-none focus:border-black transition-all text-lg font-medium"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-black text-lg pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                    {t("contact.form.name") || "Full Name"}
                  </label>
                </div>

                <div className="relative group">
                  <input
                    name="reply_to"
                    type="email"
                    required
                    className="peer w-full bg-transparent border-b-2 border-black py-3 text-black outline-none focus:border-black transition-all text-lg font-medium"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-black text-lg pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                    {t("contact.form.email") || "Email Address"}
                  </label>
                </div>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="peer w-full bg-transparent border-b-2 border-black py-3 text-black outline-none focus:border-balck transition-all text-lg font-medium resize-none"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-black text-lg pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                  {t("contact.form.message") || "How can we help?"}
                </label>
              </div>

              <motion.button
                disabled={isSending}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-6 rounded-xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 transition-all ${
                  isSending
                    ? "bg-blue-400 text-white cursor-not-allowed"
                    : "bg-blue-700 text-white shadow-[0_20px_40px_rgba(0,204,255,0.2)] hover:shadow-[0_25px_50px_rgba(0,204,255,0.3)]"
                }`}
              >
                {isSending ? (
                  "Processing..."
                ) : (
                  <>
                    {t("contact.form.send") || "Send Request"} <FaPaperPlane />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
