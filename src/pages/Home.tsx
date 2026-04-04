import Hero from "../components/home/Hero";
import Service from "../components/home/Service";
import Welcome from "../components/home/Welcome";
import DigitalResidencyInfo from "../components/home/DigitalResidencyInfo";
import ResortReviewsAndFaqs from "../components/home/Review";

function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Service />
      <DigitalResidencyInfo />
      <ResortReviewsAndFaqs />
    </>
  );
}

export default Home;
