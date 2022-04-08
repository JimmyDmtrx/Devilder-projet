import { useState } from "react";
import "../../assets/css/pageExpertise.css";
import AntiConcu from "../../components/Concurrence/AntiConcu";
import Compliance from "../../components/Concurrence/Compliance";
import ContentieuxConcu from "../../components/Concurrence/ContentieuxConcu";
import Controle from "../../components/Concurrence/Controle";

const Concurrence = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  return (
    <section>
      <h1 className="title-page-exp">Concurrence</h1>
      <div className="div-page-exp">
        <div className="div-left-page-exp">
          <div className="list-left-exp">
            <p
              onClick={() => {
                setVisible1(true);
                setVisible2(false);
                setVisible3(false);
                setVisible4(false);
              }}
            >
              Contrôle des concentrations
            </p>
          </div>
          <div className="list-left-exp">
            <p
              onClick={() => {
                setVisible1(false);
                setVisible2(true);
                setVisible3(false);
                setVisible4(false);
              }}
            >
              Pratiques anti-concurrentielles
            </p>
          </div>
          <div className="list-left-exp">
            <p
              onClick={() => {
                setVisible1(false);
                setVisible2(false);
                setVisible3(true);
                setVisible4(false);
              }}
            >
              Compliance
            </p>
          </div>
          <div className="list-left-exp">
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
        </div>
        <div className="border-limit"></div>
        <div className="div-right-list">
          {visible1 && <Controle />}
          {visible2 && <AntiConcu />}
          {visible3 && <Compliance />}
          {visible4 && <ContentieuxConcu />}
        </div>
      </div>
    </section>
  );
};

export default Concurrence;
