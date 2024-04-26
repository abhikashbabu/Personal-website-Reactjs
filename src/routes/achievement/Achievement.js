import AchievementDescription from "./AchievementDescription";
import ScrollButton from "../../components/ScrollButton";
import { useEffect } from "react";
import { Footer } from "../../components";
import Photo from "./Photo";

const Achievement = () => {
  useEffect(() => {
    document.title = "Achievement | Vaishnavi";
  })
  return (
    <article className="achievement-main">
      
      <AchievementDescription />
      <Photo/>
      <Footer/>
      <ScrollButton />
      
    </article>
  );
};

export default Achievement;
