import React from "react";
import './Hero.scss';

const Hero = () => {
    return ( 
        <>
             <div class="overlay">
        <section class="hero center">
          <div class="container hero-container">
            <h1 class="hero-title element-animation">
              Effective Solutions <br />
              for Your Business
            </h1>
            <button class="btn" data-open-modal type="button">
              Order Service
            </button>
          </div>
        </section>
      </div>

        </>
     );
}
 
export default Hero;