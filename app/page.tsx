import Hero from "./components/Hero";
import PickupForm from "./components/PickupForm";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import LeadPopup  from "./components/LeadPopup";
import Locations  from "./components/Locations";
import VideoSection from "./components/VideoSection";
import StickyCTA from "./components/StickyCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <PickupForm />
      <Gallery />
      <Services />
      <About />
      <FAQ />
       <Reviews />
       <Testimonials />
       <WhyChooseUs />
       <LeadPopup />
       <Locations />
       <VideoSection />
       <StickyCTA />
    </main>
  );
}
