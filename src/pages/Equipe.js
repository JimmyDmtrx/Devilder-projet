import "../assets/css/equipe.css";
import EdPic from "../assets/img/edouard-photo.jpeg";
import CecPic from "../assets/img/cecilia-photo.jpeg";

const Equipe = () => {
  return (
    <div className="equipe-container">
      <h1 className="title1-home"> Notre Equipe</h1>
      <div className="profil-1">
        <div className="photo-container1">
          <img className="ed-pic" src={EdPic} alt="devilder" />
        </div>
        <div>
          <div className="name-status">
            <h2>Edouard Devilder</h2>
            <p className="under-name">Avocat fondateur</p>
          </div>
          <div className="description1">
            <p>
              Inscrit au Barreau de Paris depuis novembre 2012, Édouard est
              diplômé d’un master en droit de l’Université Paris II
              Panthéon-Assas et de l’ESSEC Business School où il a effectué le
              programme Grande Ecole.
            </p>
            <p>
              Après avoir été formé dans des cabinets d’affaires internationaux
              (Linklaters et Bredin Prat) et effectué une alternance de 2 ans en
              entreprise (Orano, ex Areva), Édouard a rejoint en 2012 le cabinet
              Freshfields Bruckhaus Deringer LLP, dans lequel il a exercé en
              tant que collaborateur libéral pendant près de 6 ans.
            </p>
            <p>
              À ce titre, Édouard est intervenu sur des problématiques
              contractuelles particulièrement complexes pour une clientèle de
              grands groupes (automobile, transport ferroviaire, grande
              distribution notamment) et sur tous les aspects du droit de la
              concurrence (contrôle des concentrations, pratiques restrictives
              et pratiques anti-concurrentielles). Il a en outre traité des
              contentieux commerciaux, civils et financiers de premier plan,
              appréhendant l’approche contentieuse des problématiques
              contractuelles et corporate dans un contexte mondial.
            </p>
            <p>
              En 2018, après avoir acquis une expérience forte dans de nombreux
              pans du droit des affaires et une connaissance approfondie de
              différentes industries, Édouard a fondé Devilder Avocats afin de
              se consacrer entièrement à ses clients.
            </p>
            <p>
              Riche de son expérience, Édouard propose une relation-client
              entreprenante, privilégiée et pragmatique.{" "}
            </p>
            <p>Ses langues de travail sont le français et l’anglais.</p>
          </div>
        </div>
      </div>
      <div className="profil-2">
        <div>
          <div className="name-status">
            <h2>Cecilia Trovato</h2>
            <p className="under-name">Avocate collaboratrice</p>
          </div>
          <div>
            <p>
              Cécilia est diplômée de l’Université Paris X où elle a obtenu un
              Master 2 de droit du commercial international et a effectué un
              semestre d’étude à l’Université Torcuato di Tella de Buenos Aires
              (Argentine).
            </p>
            <p>
              Cécilia a été formée en droit commercial, notamment au sein du
              département « droit commercial / droit de la distribution » du
              cabinet CMS Francis Lefebvre et de l’équipe « contrats commerciaux
              internationaux » de SNCF Voyages Développement, filiale dédiée au
              pilotage des partenariats internationaux de la SNCF avec les
              entreprises ferroviaires étrangères.
            </p>
            <p>
              Elle a rejoint le cabinet Devilder Avocats en juillet 2019 en tant
              que collaboratrice libérale où elle intervient principalement en
              matière de contrats d’affaires, distribution, concurrence,
              consommation et contentieux des affaires.
            </p>
            <p>
              L’expérience qu’elle a acquise, associée à son parcours
              académique, lui ont permis de développer une pratique du droit
              commercial dans toutes ses branches et une maîtrise des techniques
              contentieuses.
            </p>
            <p>Ses langues de travail sont le français et l’anglais.</p>
          </div>
        </div>
        <div className="photo-container2">
          <img className="ed-pic" src={CecPic} alt="trovato" />
        </div>
      </div>
    </div>
  );
};

export default Equipe;
