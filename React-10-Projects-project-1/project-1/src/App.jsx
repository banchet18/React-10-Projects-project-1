import "./App.css";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
};

export default App;
