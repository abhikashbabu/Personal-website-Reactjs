import { Footer } from "../../components/index.js";
import Languages from "./Languages.js";
import Stack from "./Skills.js";
import AboutMe from "./AboutMe.js";
import ScrollButton from "../../helpers/ScrollToTop";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About | Sophia Martinez";
  })
  return (
    <article className="about-main">
      <AboutMe />
      <Stack />
   
      <Languages />
     
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default About;
