import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Work from './components/Work/Work';
import Team from './components/Team/Team';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
// import onEntry from './Animal';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Work />
      <Team />
      <Clients />
      <Footer />
      {/* <Animal /> */}
    </div>
  );
}

export default App;
