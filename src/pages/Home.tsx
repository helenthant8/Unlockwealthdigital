import Hero from "../components/home/Hero";
import Navbar from "../components/common/Navbar";
import Service from "../components/home/Service";
import Welcome from "../components/home/Welcome";
import DigitalResidencyInfo from "../components/home/DigitalResidencyInfo";
import ResortReviewsAndFaqs from "../components/home/Review";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Service />
      <DigitalResidencyInfo />
      <ResortReviewsAndFaqs />
      <Footer />
    </>
  );
}

export default Home;
