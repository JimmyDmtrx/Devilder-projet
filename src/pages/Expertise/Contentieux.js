import { useState } from "react";
import "../../assets/css/pageExpertise.css";
import CivilCommercial from "../../components/Litiges/Civil&Commercial";
import ContentieuxAssurance from "../../components/Litiges/ContentieuxAssurance";
import Precontentieux from "../../components/Litiges/Precontentieux";
import ContentieuxImmo from "../../components/Immobilier/ContentieuxImmo";
import DroitsSociete from "../../components/Litiges/DroitsSociete";
import Mard from "../../components/Litiges/Mard";

const Contentieux = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  return (
    <section>
      <h1 className="title-page-exp">CONTENTIEUX ET RÉSOLUTION DES LITIGES</h1>
      <p>
        Devilder Avocats accompagne ses clients dans l’élaboration et
        l’exécution de la meilleure stratégie juridique ou judiciaire à adopter.
        À ce titre, le cabinet mène pour le compte de ses clients des
        négociations précontentieuses et/ou transactionnelles. Il représentante
        et assiste ses clients à tous les stades de la procédure et devant
        toutes les juridictions civiles (Tribunal judiciaire, Cour d’appel) et
        commerciales dans le cadre de procédures classiques ou d’urgence
        (procédures d’heure à heure ou jour fixe).
      </p>
      <div className="div-page-exp">
        <div className="div-left-page-exp">
          <div
            onClick={() => {
              setVisible1(true);
              setVisible2(false);
              setVisible3(false);
              setVisible4(false);
              setVisible5(false);
              setVisible6(false);
            }}
            className="list-left-exp"
          >
            <p>Précontentieux et stratégie</p>
          </div>
          <div
            onClick={() => {
              setVisible1(false);
              setVisible2(true);
              setVisible3(false);
              setVisible4(false);
              setVisible5(false);
              setVisible6(false);
            }}
            className="list-left-exp"
          >
            <p>Contentieux civil et commercial</p>
          </div>
          <div
            onClick={() => {
              setVisible1(false);
              setVisible2(false);
              setVisible3(true);
              setVisible4(false);
              setVisible5(false);
              setVisible6(false);
            }}
            className="list-left-exp"
          >
            <p>Contentieux des assurances</p>
          </div>
          <div
            onClick={() => {
              setVisible1(false);
              setVisible2(false);
              setVisible3(false);
              setVisible4(true);
              setVisible5(false);
              setVisible6(false);
            }}
            className="list-left-exp"
          >
            <p>Contentieux immobilier</p>
          </div>
          <div
            onClick={() => {
              setVisible1(false);
              setVisible2(false);
              setVisible3(false);
              setVisible4(false);
              setVisible5(true);
              setVisible6(false);
            }}
            className="list-left-exp"
          >
            <p>Contentieux du droit des sociétés</p>
          </div>
          <div
            onClick={() => {
              setVisible1(false);
              setVisible2(false);
              setVisible3(false);
              setVisible4(false);
              setVisible5(false);
              setVisible6(true);
            }}
            className="list-left-exp"
          >
            <p>MARD</p>
          </div>
        </div>
        <div className="border-limit"></div>
        <div className="div-right-list">
          {visible1 && <Precontentieux />}
          {visible2 && <CivilCommercial />}
          {visible3 && <ContentieuxAssurance />}
          {visible4 && <ContentieuxImmo />}
          {visible5 && <DroitsSociete />}
          {visible6 && <Mard />}
        </div>
      </div>
    </section>
  );
};

export default Contentieux;
