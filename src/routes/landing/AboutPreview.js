import AboutMe from "../about/AboutMe.js";
import Skills from "../about/Skills.js";

const AboutPreview = () => {
  return (
    <article className="about">
      <AboutMe />
      <Skills />
    </article>
  );
};

export default AboutPreview;
