import { useState } from "react";
import "../../assets/css/pageExpertise.css";
import Contrats from "../../components/Contratscommerciaux/Contrats";
import ContratsIT from "../../components/Contratscommerciaux/ContratsIT";
import RelationsCommerciales from "../../components/Contratscommerciaux/GestionRelation";
import Contentieuxcommercial from "../../components/Contratscommerciaux/ContentieuxCommercial";

const ContratsCommerciaux = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  return (
    <section>
      <h1 className="title-page-exp">Contrats commerciaux</h1>
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
            <p>Rédaction de contrats d'affaires</p>
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
            <p>Rédaction de contrats IT</p>
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
            <p>Gestion des relations commerciales</p>
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
            <p>Contentieux commercial</p>
          </div>
        </div>
        <div className="border-limit"></div>
        <div className="div-right-list">
          {visible1 && <Contrats />}
          {visible2 && <ContratsIT />}
          {visible3 && <RelationsCommerciales />}
          {visible4 && <Contentieuxcommercial />}
        </div>
      </div>
    </section>
  );
};

export default ContratsCommerciaux;
