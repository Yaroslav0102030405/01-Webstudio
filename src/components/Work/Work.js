import React from 'react';
import './Work.scss';

import Img from './../../images/work/work-img-340.jpg'
import Img2 from './../../images/work/work2/work2-img.jpg'
import Img3 from './../../images/work/work3/work3-img-370.jpg'

const Work = () => {
  return (
    <>
      <section class="work">
        <div class="container">
          <h2 class="work-title center element-animation">What Are We Doing</h2>
          <ul class="work-list work-flex-container">
            <li class="work-item element-animation">
              <picture>
                {/* <source srcset={Img1} type="image/webp" /> */}
                <img
                  loading="lazy"
                  class=" lazyload work-image"
                  srcset={Img}
                //   data-src={Img1}
                  alt="разработка сайтов"
                  width="370"
                  height="294"
                />
              </picture>
            </li>
            <li class="work-item element-animation">
              <picture>
                {/* <source
                  srcset="
                    ./images/work/work2/work2-img@1x.webp 1x,
                    ./images/work/work2/work2-img@2x.webp 2x
                  "
                  type="image/webp"
                /> */}
                <img
                  loading="lazy"
                  class="work-image"
                  srcset={Img2}
                //   src={Img2}
                  alt="разработка мобильных приложений"
                  width="370"
                  height="294"
                />
              </picture>
            </li>
            <li class="work-item element-animation">
              <picture>
                {/* <source
                  srcset="
                    ./images/work/work3/work3-img-370@1x.webp 1x,
                    ./images/work/work3/work3-img-740@2x.webp 2x
                  "
                  type="image/webp"
                /> */}
                <img
                  loading="lazy"
                  class=" lazyload work-image"
                  srcset={Img3}
                //   data-src="./images/work/work3/work3-img-370.jpg"
                  alt="созданием фирменного стиля"
                  width="370"
                  height="294"
                />
              </picture>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Work;
