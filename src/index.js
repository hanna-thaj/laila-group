import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HardwareMaterials from "./Components/HardwareMaterials/HardwareMaterials";
import FrozenMaterials from "./Components/FrozenMaterials/FrozenMaterials";
 
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
 


const App = () => {
  return (
   
    <Router>
      <Header></Header>
     <Routes>
      <Route path="/" element={<About />} />
      <Route path="/hardware-materials" element={<HardwareMaterials />} />
      <Route path="/frozen-materials" element={<FrozenMaterials />} />
    </Routes>
    
   </Router>

  );
};

ReactDOM.render(<App />, document.getElementById("root"));