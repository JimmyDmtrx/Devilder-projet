import { useState } from "react";
import "../../assets/css/pageExpertise.css";
import BauxCommerciaux from "../../components/Immobilier/BauxCommerciaux";
import Construction from "../../components/Immobilier/Construction";
import ContentieuxImmo from "../../components/Immobilier/ContentieuxImmo";
import VenteImmo from "../../components/Immobilier/VenteImmo";

const Immobilier = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  return (
    <section>
      <h1 className="title-page-exp">IMMOBILIER ET CONSTRUCTION</h1>
      <div className="div-page-exp">
        <div className="div-left-page-exp">
          <div
            onClick={() => {
              setVisible1(true);
              setVisible2(false);
              setVisible3(false);
              setVisible4(false);
            }}
            className="list-left-exp"
          >
            <p>Baux commerciaux</p>
          </div>
          <div
            onClick={() => {
              setVisible1(false);
              setVisible2(true);
              setVisible3(false);
              setVisible4(false);
            }}
            className="list-left-exp"
          >
            <p>Vente immobilière</p>
          </div>
          <div
            onClick={() => {
              setVisible1(false);
              setVisible2(false);
              setVisible3(true);
              setVisible4(false);
            }}
            className="list-left-exp"
          >
            <p>Construction</p>
          </div>
          <div
            onClick={() => {
              setVisible1(false);
              setVisible2(false);
              setVisible3(false);
              setVisible4(true);
            }}
            className="list-left-exp"
          >
            <p>Contentieux</p>
          </div>
        </div>
        <div className="border-limit"></div>
        <div className="div-right-list">
          {visible1 && <BauxCommerciaux />}
          {visible2 && <VenteImmo />}
          {visible3 && <Construction />}
          {visible4 && <ContentieuxImmo />}
        </div>
      </div>
    </section>
  );
};

export default Immobilier;
