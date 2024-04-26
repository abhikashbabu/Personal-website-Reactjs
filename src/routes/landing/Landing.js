import AboutPreview from "./AboutPreview";
import HeaderPreview from "./HeaderPreview";
import AchievementPreview from "./AchievementPreview";
import ContactPreview from "./ContactPreview" ;
import { Footer } from "../../components";
import ProjectPreview from "./ProjectsPreview";
import ScrollButton from "../../components/ScrollButton";
import { useEffect } from "react";
import Project from "../achievement/Photo";

const Mainpage = () => {
  useEffect(() => {
    document.title = "Vaishnavi | Personal Website";
  })
  return (
    <article className="main-page">
      <HeaderPreview />
      <AboutPreview />
      <AchievementPreview />
   
      <ContactPreview />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default Mainpage;
