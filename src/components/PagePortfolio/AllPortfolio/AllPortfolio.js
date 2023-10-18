import React, { useState } from 'react';
import './AllPortfolio.scss';

import { useTranslation } from 'react-i18next';

import Desctop1 from './Portfolio-img/Desctop/Desctop1.jpg';
import Desctop2 from './Portfolio-img/Desctop/Desctop2.jpg';
import Desctop3 from './Portfolio-img/Desctop/Desctop3.jpg';
import Desctop4 from './Portfolio-img/Desctop/Desctop4.jpg';
import Desctop5 from './Portfolio-img/Desctop/Desctop5.jpg';
import Desctop6 from './Portfolio-img/Desctop/Desctop6.jpg';
import Desctop7 from './Portfolio-img/Desctop/Desctop7.jpg';
import Desctop8 from './Portfolio-img/Desctop/Desctop8.jpg';
import Desctop9 from './Portfolio-img/Desctop/Desctop9.jpg';

import Tablet1 from './Portfolio-img/Tablet/Tablet1.jpg';
import Tablet2 from './Portfolio-img/Tablet/Tablet2.jpg';
import Tablet3 from './Portfolio-img/Tablet/Tablet3.jpg';
import Tablet4 from './Portfolio-img/Tablet/Tablet4.jpg';
import Tablet5 from './Portfolio-img/Tablet/Tablet5.jpg';
import Tablet6 from './Portfolio-img/Tablet/Tablet6.jpg';
import Tablet7 from './Portfolio-img/Tablet/Tablet7.jpg';
import Tablet8 from './Portfolio-img/Tablet/Tablet8.jpg';
import Tablet9 from './Portfolio-img/Tablet/Tablet9.jpg';

import Mobile1 from './Portfolio-img/Mobile/Mobile1.jpg';
import Mobile2 from './Portfolio-img/Mobile/Mobile2.jpg';
import Mobile3 from './Portfolio-img/Mobile/Mobile3.jpg';
import Mobile4 from './Portfolio-img/Mobile/Mobile4.jpg';
import Mobile5 from './Portfolio-img/Mobile/Mobile5.jpg';
import Mobile6 from './Portfolio-img/Mobile/Mobile6.jpg';
import Mobile7 from './Portfolio-img/Mobile/Mobile7.jpg';
import Mobile8 from './Portfolio-img/Mobile/Mobile8.jpg';
import Mobile9 from './Portfolio-img/Mobile/Mobile9.jpg';

const AllPortfolio = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <>
      <section className="allportfolio">
        <div className="container">
          <ul className="allportfolio__list">
            <li className="allportfolio__item">
              <button type="button">{t('portfolio.btn-1')}</button>
            </li>
            <li className="allportfolio__item">
              <button type="button">{t('portfolio.btn-2')}</button>
            </li>
            <li className="allportfolio__item">
              <button type="button">{t('portfolio.btn-3')}</button>
            </li>
            <li className="allportfolio__item">
              <button type="button">{t('portfolio.btn-4')}</button>
            </li>
            <li className="allportfolio__item">
              <button type="button">{t('portfolio.btn-5')}</button>
            </li>
          </ul>

          <ul className="allportfolio__item2">
            {/* filtered.map(({id}) => (
              )) */}
            <li className="allportfolio__link">
              <div className="box__active">
                {/* <a href="#"> */}
                <picture>
                  <source
                    srcSet={Mobile1}
                    type="image/jpeg"
                    media="(max-width: 767px)"
                  />
                  <source
                    srcSet={Tablet1}
                    type="image/jpeg"
                    media="(min-width: 768px)"
                    
                  />
                  <source
                    srcSet={Desctop1}
                    type="image/jpeg"
                    media="(min-width:1200px)"
                   
                  />
                  <img
                    loading="lazy"
                    className="lazyload"
                    data-src={Desctop1}
                    alt="Website"
                    // width="368"
                  ></img>
                </picture>
                <div className="box__overlay">{/* </a> */}</div>
              </div>

              <h2>{t('portfolio.name-1')}</h2>
              <p>{t('portfolio.desc-1')}</p>
              {/* </a> */}
            </li>
            <li className="allportfolio__link">
              <div className="box__active">
                {/* <a href="#"> */}
                <picture>
                  <source
                    srcSet={Mobile2}
                    type="image/jpeg"
                    media="(max-width: 767px)"
                  />
                  <source
                    srcSet={Tablet2}
                    type="image/jpeg"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={Desctop2}
                    type="image/jpeg"
                    media="(min-width:1200px)"
                  />
                  <img
                    loading="lazy"
                    className="lazyload"
                    data-src={Desctop2}
                    alt="Desing"
                    // width="368"
                  ></img>
                </picture>
                <div className="box__overlay">{/* </a> */}</div>
              </div>
              <h2>{t('portfolio.name-2')}</h2>
              <p>{t('portfolio.desc-2')}</p>
            </li>
            <li className="allportfolio__link">
              <div className="box__active">
                {/* <a href="#"> */}
                <picture>
                  <source
                    srcSet={Mobile3}
                    type="image/jpeg"
                    media="(max-width: 767px)"
                  />
                  <source
                    srcSet={Tablet3}
                    type="image/jpeg"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={Desctop3}
                    type="image/jpeg"
                    media="(min-width:1200px)"
                  />
                  <img
                    loading="lazy"
                    className="lazyload"
                    data-src={Desctop3}
                    alt="Application"
                    // width="368"
                  ></img>
                </picture>
                <div className="box__overlay">{/* </a> */}</div>
              </div>
              <h2>{t('portfolio.name-3')}</h2>
              <p>{t('portfolio.desc-3')}</p>
              {/* </a> */}
            </li>
            <li className="allportfolio__link">
              <div className="box__active">
                {/* <a href="#"> */}
                <picture>
                  <source
                    srcSet={Mobile4}
                    type="image/jpeg"
                    media="(max-width: 767px)"
                  />
                  <source
                    srcSet={Tablet4}
                    type="image/jpeg"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={Desctop4}
                    type="image/jpeg"
                    media="(min-width:1200px)"
                  />
                  <img
                    loading="lazy"
                    className="lazyload"
                    data-src={Desctop4}
                    alt="Marketing"
                    // width="368"
                  ></img>
                </picture>
                <div className="box__overlay">{/* </a> */}</div>
              </div>

              <h2>{t('portfolio.name-4')}</h2>
              <p>{t('portfolio.desc-4')}</p>
              {/* </a> */}
            </li>
            <li className="allportfolio__link">
              <div className="box__active">
                {/* <a href="#"> */}
                <picture>
                  <source
                    srcSet={Mobile5}
                    type="image/jpeg"
                    media="(max-width: 767px)"
                  />
                  <source
                    srcSet={Tablet5}
                    type="image/jpeg"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={Desctop5}
                    type="image/jpeg"
                    media="(min-width:1200px)"
                  />
                  <img
                    loading="lazy"
                    className="lazyload"
                    data-src={Desctop5}
                    alt="Application"
                    // width="368"
                  ></img>
                </picture>
                <div className="box__overlay">{/* </a> */}</div>
              </div>
              <h2>{t('portfolio.name-5')}</h2>
              <p>{t('portfolio.desc-5')}</p>
              {/* </a> */}
            </li>
            <li className="allportfolio__link">
              <div className="box__active">
                {/* <a href="#"> */}
                <picture>
                  <source
                    srcSet={Mobile6}
                    type="image/jpeg"
                    media="(max-width: 767px)"
                  />
                  <source
                    srcSet={Tablet6}
                    type="image/jpeg"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={Desctop6}
                    type="image/jpeg"
                    media="(min-width:1200px)"
                  />
                  <img
                    loading="lazy"
                    className="lazyload"
                    data-src={Desctop6}
                    alt="Website"
                    // width="368"
                  ></img>
                </picture>
                <div className="box__overlay">{/* </a> */}</div>
              </div>
              <h2>{t('portfolio.name-6')}</h2>
              <p>{t('portfolio.desc-6')}</p>
              {/* </a> */}
            </li>
            <li className="allportfolio__link">
              <div className="box__active">
                {/* <a href="#"> */}
                <picture>
                  <source
                    srcSet={Mobile7}
                    type="image/jpeg"
                    media="(max-width: 767px)"
                  />
                  <source
                    srcSet={Tablet7}
                    type="image/jpeg"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={Desctop7}
                    type="image/jpeg"
                    media="(min-width:1200px)"
                  />
                  <img
                    loading="lazy"
                    className="lazyload"
                    data-src={Desctop7}
                    alt="Website"
                    // width="368"
                  ></img>
                </picture>
                <div className="box__overlay">{/* </a> */}</div>
              </div>

              <h2>{t('portfolio.name-7')}</h2>
              <p>{t('portfolio.desc-7')}</p>
              {/* </a> */}
            </li>
            <li className="allportfolio__link">
              <div className="box__active">
                {/* <a href="#"> */}
                <picture>
                  <source
                    srcSet={Mobile8}
                    type="image/jpeg"
                    media="(max-width: 767px)"
                  />
                  <source
                    srcSet={Tablet8}
                    type="image/jpeg"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={Desctop8}
                    type="image/jpeg"
                    media="(min-width:1200px)"
                  />
                  <img
                    loading="lazy"
                    className="lazyload"
                    data-src={Desctop8}
                    alt="Desing"
                    // width="368"
                  ></img>
                </picture>
                <div className="box__overlay">{/* </a> */}</div>
              </div>

              <h2>{t('portfolio.name-8')}</h2>
              <p>{t('portfolio.desc-8')}</p>
              {/* </a> */}
            </li>
            <li className="allportfolio__link">
              <div className="box__active">
                {/* <a href="#"> */}
                <picture>
                  <source
                    srcSet={Mobile9}
                    type="image/jpeg"
                    media="(max-width: 767px)"
                  />
                  <source
                    srcSet={Tablet9}
                    type="image/jpeg"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={Desctop9}
                    type="image/jpeg"
                    media="(min-width:1200px)"
                  />
                  <img
                    loading="lazy"
                    className="lazyload"
                    data-src={Desctop9}
                    alt="Desing"
                    // width="368"
                  ></img>
                </picture>
                <div className="box__overlay">{/* </a> */}</div>
              </div>
              <h2>{t('portfolio.name-9')}</h2>
              <p>{t('portfolio.desc-9')}</p>
              {/* </a> */}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AllPortfolio;
