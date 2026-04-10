import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import DigitalResidencyInfo from "../components/home/DigitalResidencyInfo";
import ResortReviewsAndFaqs from "../components/home/Review";

function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <DigitalResidencyInfo />
      <ResortReviewsAndFaqs />
    </>
  );
}

export default Home;
