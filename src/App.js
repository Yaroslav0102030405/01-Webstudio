import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// import Home from './components/Home/Home';
// import Portfolio from './components/PagePortfolio/Portfolio';
// import { NotFoundPage } from './components/Modal/NotFoundPage/NotFoundPage';
// import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
// import Features from './components/Features/Features';
// import Work from './components/Work/Work';
// import Team from './components/Team/Team';
// import Clients from './components/Clients/Clients';
// import Footer from './components/Footer/Footer';

const Home = lazy(() =>
  import('./components/Home/Home.js' /* webpackChunkName: "home-page" */),
);
const Portfolio = lazy(() =>
  import(
    './components/PagePortfolio/Portfolio.js' /* webpackChunkName: "portfolio-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import(
    './components/Modal/NotFoundPage/NotFoundPage.js' /* webpackChunkName: "NotFound-page" */
  ),
);

function App() {
  return (
    <div className="App">
      {/* <Home /> */}

      <Suspense fallback={<h1>Загрузка...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

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
