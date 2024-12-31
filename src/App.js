import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header></Header>
       <Routes>
        <Route path="/" element={<About />} />
       </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
