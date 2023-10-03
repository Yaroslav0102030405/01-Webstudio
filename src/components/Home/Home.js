import React from 'react';

import Header from './../Header/Header';
import Hero from './../Hero/Hero';
import Features from './../Features/Features';
import Work from './../Work/Work';
import Team from './../Team/Team';
import Clients from './../Clients/Clients';
import Footer from './../Footer/Footer';

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
