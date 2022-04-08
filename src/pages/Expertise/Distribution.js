import { useState } from "react";
import "../../assets/css/pageExpertise.css";
import Consommation from "../../components/DistribConso/Consommation";
import DistributionComp from "../../components/DistribConso/DistributionComp";
import DonneesPerso from "../../components/DistribConso/DonneesPerso";

const Distribution = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  return (
    <section>
      <h1 className="title-page-exp">Distribution et consommation</h1>
      <div className="div-page-exp">
        <div className="div-left-page-exp">
          <div
            onClick={() => {
              setVisible1(true);
              setVisible2(false);
              setVisible3(false);
            }}
            className="list-left-exp"
          >
            <p>Distribution</p>
          </div>
          <div
            onClick={() => {
              setVisible1(false);
              setVisible2(true);
              setVisible3(false);
            }}
            className="list-left-exp"
          >
            <p>Consommation</p>
          </div>
          <div
            onClick={() => {
              setVisible1(false);
              setVisible2(false);
              setVisible3(true);
            }}
            className="list-left-exp"
          >
            <p>Données personnelles</p>
          </div>
        </div>
        <div className="border-limit"></div>
        <div className="div-right-list">
          {visible1 && <DistributionComp />}
          {visible2 && <Consommation />}
          {visible3 && <DonneesPerso />}
        </div>
      </div>
    </section>
  );
};

export default Distribution;
