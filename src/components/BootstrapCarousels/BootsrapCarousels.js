import React from 'react';
import Modal from '../Modal/Modal';
import './../../HOME-PAGE/Hero/Hero.scss';
import './BootstrapCarousels.scss';

import Button from '../Button/Button';

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import Desctop from '../../images/hero/desctopFirst-1x.png';
// import Desctop2 from '../../images/hero/desctop-2--1x.jpg';
// import Desctop3 from '../../images/hero/desctop-3--1x.jpg';

import Mobile from '../../images/hero/bh-img-480-2x.jpg';
// import Mobile2 from '../../images/hero/Mobile-2-480-2x.jpg';
// import Mobile3 from '../../images/hero/Mobile-3-480-2x.jpg';

import Tablet from '../../images/hero/bg-img-768-2x.jpg';
// import Tablet2 from '../../images/hero/tablet-2-768-2x.jpg';
// import Tablet3 from '../../images/hero/tablet-3-768-2x.jpg';

import DesctopWebP1 from '../../images/hero/WebP/desctopFirst-1x.WebP';
import DesctopWebP2 from '../../images/hero/WebP/desctop-2--1x.WebP';
import DesctopWebP3 from '../../images/hero/WebP/desctop-3--1x.WebP';

import TabletWebP2 from '../../images/hero/WebP/tablet-2-768-2x.WebP';
import TabletWebP3 from '../../images/hero/WebP/tablet-3-768-2x.WebP';

import MobileWebP2 from '../../images/hero/WebP/Mobile-2-480-2x.WebP';
import MobileWebP3 from '../../images/hero/WebP/Mobile-3-480-2x.WebP';



function IndividualIntervalsExample() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item interval={1000}>
        <picture>
          <source srcSet={Mobile} media="(max-width: 767px)" type="image/jpg" />
          <source
            srcSet={Tablet}
            media="(min-width: 768px) and (max-width: 1199px)"
          />
          <source srcSet={DesctopWebP1} media="(min-width: 1200px)" />
          <img
            width="100%"
            height="auto"
            className="d-block w-100 Desctop"
            src={DesctopWebP1}
            alt="First slide"
          />
        </picture>
        <Carousel.Caption>
          {/* <h1 className="hero__title">Effective Solutions for Your Business</h1> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          {/* <button className="btn" type="button">
            Order Service
          </button> */}
          <Button />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <picture>
          <source
            srcSet={MobileWebP2}
            media="(max-width: 767px)"
            type="image/jpg"
          />
          <source
            srcSet={TabletWebP2}
            media="(min-width: 768px) and (max-width: 1199px)"
          />
          <source srcSet={DesctopWebP2} media="(min-width: 1200px)" />
          <img
            width="100%"
            height="auto"
            className="d-block w-100 Backround__image"
            src={DesctopWebP2}
            alt="Second slide"
          />
        </picture>
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          <Button />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <picture>
          <source
            srcSet={MobileWebP3}
            media="(max-width: 767px)"
            type="image/jpg"
          />
          <source
            srcSet={TabletWebP3}
            media="(min-width: 768px) and (max-width: 1199px)"
          />
          <source srcSet={DesctopWebP3} media="(min-width: 1200px)" />
          <img
            width="100%"
            height="auto"
            className="d-block w-100"
            src={DesctopWebP3}
            alt="Third slide"
          />
        </picture>
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          <Button />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
