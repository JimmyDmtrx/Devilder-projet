import { useState } from "react";
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
      <h1>IMMOBILIER ET CONSTRUCTION</h1>
      <div>
        <div>
          <p
            onClick={() => {
              setVisible1(true);
              setVisible2(false);
              setVisible3(false);
              setVisible4(false);
            }}
          >
            Baux commerciaux
          </p>
          <p
            onClick={() => {
              setVisible1(false);
              setVisible2(true);
              setVisible3(false);
              setVisible4(false);
            }}
          >
            Vente immobilière
          </p>
          <p
            onClick={() => {
              setVisible1(false);
              setVisible2(false);
              setVisible3(true);
              setVisible4(false);
            }}
          >
            Construction
          </p>
          <p
            onClick={() => {
              setVisible1(false);
              setVisible2(false);
              setVisible3(false);
              setVisible4(true);
            }}
          >
            Contentieux
          </p>
        </div>
        <div>
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
