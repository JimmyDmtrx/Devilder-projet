import React, { useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

import "../assets/css/contact.css";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 48.879486, lng: 2.351004 }}
    />
  );
};
const WrappedMap = withScriptjs(withGoogleMap(Map));
console.log("process = ", process.env.REACT_APP_GOOGLE_KEY);
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  //map
  // const [viewPort, setViewPort] = useState({
  //   latitude: 48.879486,
  //   longitude: 2.351004,
  //   zoom: 10,
  //   width: "100%",
  //   height: "100%",
  // });

  return (
    <div>
      <div>
        <div>
          <h1>Contacter le cabinet</h1>
        </div>
        <div>
          <p>Une question ? Une problématique ?</p>
          <p>
            N’hésitez pas remplir ce formulaire de contact. Nous vous répondrons
            dans les meilleurs délais.
          </p>
        </div>
      </div>
      <div className="form-container">
        <form>
          <input
            className="input-form"
            value={name}
            type="text"
            placeholder="Nom"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className="input-form"
            value={email}
            type="text"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="input-form"
            value={phone}
            type="text"
            placeholder="Téléphone"
            onChange={(event) => setPhone(event.target.value)}
          />

          <input
            className="input-form-area"
            value={message}
            type="text"
            placeholder="Message"
            onChange={(event) => setMessage(event.target.value)}
          />
          <input className="button-form" type="submit" value={"Valider"} />
        </form>
      </div>
      {/* <div>
        <h1>Localisation du cabinet</h1>
        <div style={{ height: "500px", width: "500px" }}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div> */}
      <div>
        <span>adresse</span>
        <span>numéro</span>
        <span>mail</span>
      </div>
    </div>
    // </div>
  );
};

export default Contact;
