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
import "./App.css";

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
