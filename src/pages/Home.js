import "../assets/css/home.css";
import PicHome from "../assets/img/TC-Paris.jpeg";

const Home = () => {
  return (
    <section className="home">
      <div className="home-photo-container">
        <img className="home-pic" src={PicHome} alt="homepic" />
      </div>
      <div>
        <h1 className="title1-home">NOTRE CABINET D’AVOCATS </h1>
        <p>
          Devilder Avocats est un cabinet d’affaires qui fait preuve d’une
          extrême proximité avec ses clients, d’une très haute qualité de
          service dans le traitement de dossiers et d’une volonté d’accompagner
          ses clients au-delà du simple conseil juridique, en véritable
          partenaire.
        </p>
        <h2 className="title2-home">Proximité</h2>
        <p>
          Davantage qu’un simple conseil, notre vocation est de nous insérer au
          plus près des activités de nos clients, en utilisant leurs propres
          outils, étant en contact direct avec leurs équipes et travaillant en
          tant que de besoin dans leurs locaux.{" "}
        </p>
        <p>
          Cela nous permet d’avoir une excellente connaissance de l’activité de
          nos clients et des problématiques auxquels ils sont confrontés, et
          ainsi de traiter les dossiers de manière particulièrement efficace.
        </p>
        <h2 className="title2-home">Qualité de service</h2>
        <p>
          Devilder Avocats s’adapte aux besoins spécifiques de chacun de ses
          clients qu’il soit un grand groupe, une PME, une start-up, un
          dirigeant ou encore un entrepreneur.{" "}
        </p>
        <p>
          Formée au traitement rigoureux des problématiques les plus complexes,
          nous mettons en place dans chacun des dossiers qui lui nous sont
          confiés une analyse très approfondie des problématiques de droit et
          développons, après échanges avec nos clients, des solutions
          individualisées, opérationnelles et innovantes.
        </p>
        <h2 className="title2-home">Votre partenaire</h2>
        <p>
          L’ADN du cabinet est l’accompagnement sur le long terme de sociétés
          commerciales de tout type qui ont des besoins en ressources juridiques
          (demande croissante, vacance de poste, période de transition) et des
          problématiques juridiques récurrentes (négociation et rédaction de
          contrats de tout type et en particulier IT, corporate,
          (pré)-contentieux, validation des opérations promotionnelles et
          publicitaires, etc.).{" "}
        </p>
        <p>
          Très proche de ses clients, Devilder Avocats entretient avec chacun
          d’entre eux une relation de confiance étroite et pérenne, fait preuve
          d’une réactivité et d’une disponibilité fortes.
        </p>
      </div>
    </section>
  );
};

export default Home;
