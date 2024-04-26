import { Link } from "react-router-dom";

const HeaderPreview = () => {
  return (
    <article className="header">
      <h1 className="header-font white-text h1-tag">
        Hi, I'm <br></br>
        <em className="pink-text">Vaishnavi</em>
        <br></br>Vollyball player
      </h1>
      <p className="gray-text p-tag">Gujarati swag</p>
      <Link className="pink-text" to="/achievement">
        Check my Archivement
      </Link>
    </article>
  );
};

export default HeaderPreview;
