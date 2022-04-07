import { useState } from "react";
import Consommation from "../../components/DistribConso/Consommation";
import DistributionComp from "../../components/DistribConso/DistributionComp";
import DonneesPerso from "../../components/DistribConso/DonneesPerso";

const Distribution = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  return (
    <section>
      <h1>Distribution et consommation</h1>
      <div>
        <div>
          <p
            onClick={() => {
              setVisible1(true);
              setVisible2(false);
              setVisible3(false);
            }}
          >
            Distribution
          </p>
          <p
            onClick={() => {
              setVisible1(false);
              setVisible2(true);
              setVisible3(false);
            }}
          >
            Consommation
          </p>
          <p
            onClick={() => {
              setVisible1(false);
              setVisible2(false);
              setVisible3(true);
            }}
          >
            Données personnelles
          </p>
        </div>
        <div>
          {visible1 && <DistributionComp />}
          {visible2 && <Consommation />}
          {visible3 && <DonneesPerso />}
        </div>
      </div>
    </section>
  );
};

export default Distribution;
