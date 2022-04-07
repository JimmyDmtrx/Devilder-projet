import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Valeurs from "./pages/Valeurs";
import Contact from "./pages/Contact";
import Expertise from "./pages/Expertise";
import Secteur from "./pages/Secteur";
import Equipe from "./pages/Equipe";
import NotFound from "./pages/Notfound";
import ContratsCommerciaux from "./pages/Expertise/ContratsCommerciaux";
import "./App.css";
import Concurrence from "./pages/Expertise/Concurrence";
import Distribution from "./pages/Expertise/Distribution";
import Immobilier from "./pages/Expertise/Immobilier";
import Contentieux from "./pages/Expertise/Contentieux";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/valeurs" element={<Valeurs />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/secteur" element={<Secteur />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/commercial-contrat" element={<ContratsCommerciaux />} />
        <Route path="/concurrence" element={<Concurrence />} />
        <Route path="/distribution" element={<Distribution />} />
        <Route path="/immobilier" element={<Immobilier />} />
        <Route path="/contentieux" element={<Contentieux />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
