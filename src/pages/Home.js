import "../assets/css/home.css";
import PicHome from "../assets/img/TC-Paris.jpeg";

const Home = () => {
  return (
    <div>
      <div className="home-photo-container">
        <img className="home-pic" src={PicHome} alt="homepic" />
      </div>
      <div>
        <h1>NOTRE CABINET D’AVOCATS </h1>
        <p>
          Devilder Avocats est un cabinet d’affaires ayant pour ADN une extrême
          proximité avec ses clients, une très haute qualité de service dans le
          traitement de dossiers complexes et la volonté d’accompagner ses
          clients au-delà du simple conseil juridique, en véritable partenaire.
          Proximité : davantage qu’un simple conseil, notre vocation est de
          s’insérer au plus près des activités de nos clients, en utilisant ses
          propres outils, en contact direct avec ses équipes, au besoin dans ses
          locaux. Ceci nous apporte une excellente connaissance de l’activité et
          des problématiques de nos clients pour un traitement des dossiers
          toujours facilitée ; Qualité de service : formée au traitement
          rigoureux des problématiques les plus complexes, notre équipe met en
          place dans chacun des dossiers qui lui sont confiés une analyse très
          approfondie des problématiques de droit et développe, après échanges
          avec les clients, la stratégie la plus élaborée pour le meilleur
          traitement du dossier ; Votre partenaire : l’ADN du cabinet est
          l’accompagnement sur le long terme de sociétés commerciales de tout
          type qui ont des besoins importants en ressources juridiques (demande
          croissante, vacance de poste, période de transition) et des
          problématiques juridiques récurrentes (négociation et rédaction de
          contrats de tout type et en particulier IT, corporate,
          (pré)-contentieux, validation des opérations promotionnelles et
          publicitaires, etc.) ; très proche de ses clients, Devilder Avocats a
          un contact privilégié avec chacun d’entre eux, fait preuve d’une
          réactivité et d’une disponibilité fortes.
        </p>
      </div>
    </div>
  );
};

export default Home;
