import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio/portfolio";
import Resume from "./components/resumen/resumen";
import Contact from "./components/contac/contac";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
