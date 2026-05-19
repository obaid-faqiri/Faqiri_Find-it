import HeroSection from "../sections/hero/HeroSection";
import FeaturedListings from "../sections/FeaturedListings/FeaturedListings"; 
import Benefits from "../sections/Benefits/Benefits";
import Locations from "../sections/Locations/Locations";
import LatestProperties from "../sections/LatestProperties/LatestProperties";
import Testimonials from "../sections/Testimonials/Testimonials";
import StatsSection from "../sections/StatsSection/StatsSection";
import Insights from "../sections/Insights/Insights";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedListings />
      <Benefits />
      <Locations />
      <LatestProperties />
      <Testimonials />
      <StatsSection />
      <Insights />
    </div>
  );
};

export default Home;