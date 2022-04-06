import "../assets/css/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div>logo</div>
      <div className="elem-header-container">
        éléments
        <Link to={"/valeurs"}>
          {" "}
          <span>Valeurs</span>
        </Link>
        <Link to={"/equipe"}>
          {" "}
          <span>Equipe</span>
        </Link>
        <Link to={"/expertise"}>
          <span>Expertise</span>
        </Link>
        <Link to={"/secteur"}>
          {" "}
          <span>Secteur</span>
        </Link>
        <Link to={"/contact"}>
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
