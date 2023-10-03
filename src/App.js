import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Portfolio from './components/PagePortfolio/Portfolio';
// import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
// import Features from './components/Features/Features';
// import Work from './components/Work/Work';
// import Team from './components/Team/Team';
// import Clients from './components/Clients/Clients';
// import Footer from './components/Footer/Footer';



function App () {
    return (
      <div className="App">
        {/* <Home /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        {/* <Header />
        <Hero />
        <Features />
        <Work />
        <Team />
        <Clients />
        <Footer /> */}
      </div>
    );
  }

export default App;
