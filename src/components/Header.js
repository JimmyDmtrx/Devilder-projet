import "../assets/css/header.css";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-justice.svg";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div>
          <Link to={"/"}>
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="elem-header-container">
          <Link to={"/equipe"}>
            <span className="title-nav">Equipe</span>
          </Link>
          <Link to={"/expertise"}>
            <span className="title-nav">Expertise</span>
          </Link>
          <Link to={"/secteur"}>
            <span className="title-nav">Secteur</span>
          </Link>
          <Link to={"/contact"}>
            <span className="title-nav">Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
