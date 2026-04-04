import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    if (formRef.current) {
      setIsSending(true);

      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(
          () => {
            Swal.fire({
              title: t("contact.success_title") || "Success!",
              text: t("contact.success_msg") || "Message sent successfully.",
              icon: "success",
              confirmButtonColor: "#2563eb",
              customClass: {
                popup: "rounded-[2rem]",
                confirmButton: "rounded-xl px-8 py-3",
              },
            });
            formRef.current?.reset();
          },
          (error: EmailJSResponseStatus) => {
            Swal.fire({
              title: t("contact.error_title") || "Error!",
              text: t("contact.error_msg") || "Something went wrong.",
              icon: "error",
              confirmButtonColor: "#ef4444",
              customClass: {
                popup: "rounded-[2rem]",
              },
            });
            console.error("FAILED...", error.text);
          },
        )
        .finally(() => setIsSending(false));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-blue-100/50 border border-blue-50"
    >
      <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider text-gray-400 ml-2">
              {t("contact.form.name")}
            </label>
            <input
              name="from_name"
              type="text"
              required
              placeholder={t("contact.form.placeholder_name")}
              className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider text-gray-400 ml-2">
              {t("contact.form.email")}
            </label>
            <input
              name="reply_to"
              type="email"
              required
              placeholder={t("contact.form.placeholder_email")}
              className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-wider text-gray-400 ml-2">
            {t("contact.form.message")}
          </label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder={t("contact.form.placeholder_msg")}
            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-400 outline-none transition-all resize-none"
          ></textarea>
        </div>
        <motion.button
          disabled={isSending}
          whileHover={{ scale: isSending ? 1 : 1.02 }}
          whileTap={{ scale: isSending ? 1 : 0.98 }}
          className={`w-full py-5 ${isSending ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"} text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-lg shadow-blue-200 transition-colors`}
        >
          {isSending ? t("contact.form.sending") : t("contact.form.send")}
          {!isSending && <FaPaperPlane size={18} />}
        </motion.button>
      </form>
    </motion.div>
  );
}

export default ContactForm;
