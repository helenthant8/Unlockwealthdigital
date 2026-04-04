import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF2]">
      <ContactHero />
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
