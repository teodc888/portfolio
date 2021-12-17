import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </div>
  );
}

export default App;
