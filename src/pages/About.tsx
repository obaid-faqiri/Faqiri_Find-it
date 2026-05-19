import AboutIntro from "../sections/AboutIntro/AboutIntro";
import HistoryTimeline from "../sections/HistoryTimeline/HistoryTimeline";
import Process from "../sections/Process/Process";
import Team from "../sections/Team/Team";
import Testimonials from "../sections/Testimonials/Testimonials";
import FAQ from "../sections/FAQ/FAQ";

const About = () => {
  return (
    <div>
      <AboutIntro />
      <HistoryTimeline />
      <Process />
      <Team /> 
      <Testimonials /> 
      <FAQ />

    </div>
  );
};

export default About;