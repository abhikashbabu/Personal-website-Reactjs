import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Codepen from "../../assets/images/socials/codepen-pink.svg";
const NavigationSocials = () => {
  return (
    <section className="social-media">
      <h3 className="title-font pink-text">Created By</h3>
      <a
        href="https://www.linkedin.com/in/abhikashbabu/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      
      <a
        href="https://codepen.io/abhikashbabu"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Codepen} alt="codepen" />
      </a>
    </section>
  );
};

export default NavigationSocials;
