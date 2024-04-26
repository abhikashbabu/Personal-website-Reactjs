import ProjectPreview from "./ProjectsPreview";
import AchievementDescription from "../achievement/AchievementDescription";
import ScrollButton from "../../components/ScrollButton";
import { useEffect } from "react";
import { Footer } from "../../components";

const Achievement = () => {
  useEffect(() => {
    document.title = "Achievement | Vaishnavi";
  })
  return (
    <article className="achievement-main">
      <AchievementDescription />
      <ProjectPreview />
      <ScrollButton />
      
    </article>
  );
};

export default Achievement;
