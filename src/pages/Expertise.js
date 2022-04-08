import "../assets/css/expertise.css";

import { useNavigate } from "react-router-dom";

const Expertise = () => {
  const navigate = useNavigate();
  const handleCateg1 = () => {
    navigate(`/commercial-contrat`);
  };
  const handleCateg2 = () => {
    navigate(`/concurrence`);
  };
  const handleCateg3 = () => {
    navigate(`/distribution`);
  };
  const handleCateg4 = () => {
    navigate(`/immobilier`);
  };
  const handleCateg5 = () => {
    navigate(`/contentieux`);
  };
  // navigate("/commercial-contrat")
  return (
    <div>
      <div className="title-expertise">Expertise</div>

      <div className="categ-container">
        <div className="categ-expertise" onClick={handleCateg1}>
          Contrats commerciaux
        </div>

        <div onClick={handleCateg2} className="categ-expertise">
          Concurrence
        </div>
        <div onClick={handleCateg3} className="categ-expertise">
          Distribution et consommation
        </div>
        <div onClick={handleCateg4} className="categ-expertise">
          Immobilier et construction
        </div>
        <div onClick={handleCateg5} className="categ-expertise">
          Contentieux et résolution des litiges
        </div>
      </div>
    </div>
  );
};

export default Expertise;
