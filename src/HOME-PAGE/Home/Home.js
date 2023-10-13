import React from 'react';

import Header from '../../HOME-PAGE/Header/Header';
import Hero from '../../HOME-PAGE/Hero/Hero';
import Features from '../../HOME-PAGE/Features/Features';
import Work from '../../HOME-PAGE/Work/Work';
import Team from '../../HOME-PAGE/Team/Team';
import Clients from '../../HOME-PAGE/Clients/Clients';
import Footer from '../../HOME-PAGE/Footer/Footer';

function Home () {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Work />
      <Team />
      <Clients />
      <Footer />
    </div>
  );
}

export default Home;
