import React from "react";
import './Features.scss'

const Features = () => {
    return (
      <>
        <section class="features">
          <div class="container">
            <h2 class="visually-hidden">Преимущества</h2>

            <ul class="features-list">
              <li class="features-item element-animation">
                <h3 class="features-title">Strategy</h3>
                <p class="features-text">
                  Our goal is to identify the business problem to walk away with
                  the perfect and creative solution.
                </p>
              </li>
              <li class="features-item element-animation">
                <h3 class="features-title">Punctuality</h3>
                <p class="features-text">
                  Bring the key message to the brand's audience for the best
                  price within the shortest possible time.
                </p>
              </li>
              <li class="features-item element-animation">
                <h3 class="features-title">Diligence</h3>
                <p class="features-text">
                  Research and confirm brands that present the strongest digital
                  growth opportunities and minimize risk.
                </p>
              </li>
              <li class="features-item element-animation">
                <h3 class="features-title">Technologies</h3>
                <p class="features-text">
                  Design practice focused on digital experiences. We bring forth
                  a deep passion for problem-solving.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </>
    );
}
 
export default Features;