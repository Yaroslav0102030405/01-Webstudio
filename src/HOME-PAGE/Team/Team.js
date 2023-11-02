import React from 'react';
import { motion } from 'framer-motion';
import './Team.scss';

import { useTranslation } from 'react-i18next';

import ProductMobile from './../../images/team/product-mobile.jpg';
import ProductTablet from './../../images/team/product-tablet.jpg';
import ProductDesctop from './../../images/team/product-desctop.jpg';
import ProductImg from './../../images/team/img-3.jpg';

import FrontendMobile from './../../images/team/frontend-mobile.jpg';
import FrontendTablet from './../../images/team/frontend-tablet.jpg';
import FrontendDesctop from './../../images/team/frontend-desctop.jpg';

import MarketingMobile from './../../images/team/marketing-mobile.jpg';
import MarketingTablet from './../../images/team/marketing-tablet.jpg';
import MarketingDesctop from './../../images/team/marketing-desctop.jpg';

import DesignerMobile from './../../images/team/designer-mobile.jpg';
import DesignerTablet from './../../images/team/designer-tablet.jpg';
import DesignerDesctop from './../../images/team/designer-desctop.jpg';

import { ReactComponent as Instagram } from './../../images/svg1/instagram 2.svg';
import { ReactComponent as Twitter } from './../../images/svg1/twitter 1.svg';
import { ReactComponent as Facebook } from './../../images/svg1/facebook 1.svg';
import { ReactComponent as Linkedin } from './../../images/svg1/linkedin 1.svg';

const Animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const Team = () => {
  
  const [t, i18n] = useTranslation('global');
  
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0, once: true }}
        className="team"
      >
        <div className="container">
          <motion.h2
            custom={1}
            variants={Animation}
            className="team-title center element-animation"
          >
            {t('team.title')}
            {/* Our Team */}
          </motion.h2>
          <ul className="team-list">
            <motion.li
              custom={2}
              variants={Animation}
              className="team-item element-animation"
            >
              <picture>
                <source
                  srcSet={ProductMobile}
                  media="(max-width: 767px)"
                  type="image/jpg"
                />
                <source
                  srcSet={ProductTablet}
                  media="(min-width: 768px) and (max-width: 1199px)"
                />
                <source srcset={ProductDesctop} media="(min-width: 1200px)" />
                <img
                  width="100%"
                  height="auto"
                  loading="lazy"
                  className="lazyload"
                  data-src={ProductImg}
                  alt="продукт дизайнер"
                />
              </picture>
              <h3 className="team-subtitle">
                {t('team.subtitle-1')}
                {/* Igor Demyanenko */}
              </h3>
              <p className="team-text">
                {t('team.desc-1')}
                {/* Product Designer */}
              </p>
              <ul className="team-flex">
                <li className="team-list-icon">
                  <a
                    href="https://www.instagram.com/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Instagram className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="https://twitter.com/?lang=uk"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Twitter className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="https://www.facebook.com/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Facebook className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="https://www.linkedin.com/"
                    aria-label="Linkedin"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Linkedin className="team-icon" />
                  </a>
                </li>
              </ul>
            </motion.li>

            <motion.li
              custom={3}
              variants={Animation}
              className="team-item element-animation"
            >
              <picture>
                <source
                  srcSet={FrontendMobile}
                  media="(max-width: 767px)"
                  type="image/jpg"
                />
                <source
                  srcSet={FrontendTablet}
                  media="(min-width: 768px) and (max-width: 1199px)"
                />
                <source srcSet={FrontendDesctop} media="(min-width: 1200px)" />
                <img
                  width="100%"
                  height="auto"
                  loading="lazy"
                  class="lazyload"
                  data-src={FrontendDesctop}
                  alt="фронтенд разработчик"
                />
              </picture>

              <h3 className="team-subtitle">
                {t('team.subtitle-2')}
                {/* Olga Repina */}
              </h3>
              <p className="team-text">
                {t('team.desc-2')}
                {/* Frontend Developer */}
              </p>
              <ul className="team-flex">
                <li class="team-list-icon">
                  <a
                    href="https://www.instagram.com/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Instagram className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="https://twitter.com/?lang=uk"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Twitter className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="https://www.facebook.com/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Facebook className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="https://www.linkedin.com/"
                    aria-label="Linkedin"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Linkedin className="team-icon" />
                  </a>
                </li>
              </ul>
            </motion.li>

            <motion.li
              custom={4}
              variants={Animation}
              className="team-item element-animation"
            >
              <picture>
                <source
                  srcSet={MarketingMobile}
                  media="(max-width: 767px)"
                  type="image/jpg"
                />
                <source srcSet={MarketingTablet} media="(min-width: 768px)" />
                <source srcSet={MarketingDesctop} media="(min-width: 1200px)" />

                <img
                  width="100%"
                  height="auto"
                  loading="lazy"
                  className="lazyload"
                  data-src={MarketingDesctop}
                  alt="маркетолог"
                />
              </picture>

              <h3 className="team-subtitle">
                {t('team.subtitle-3')}
                {/* Nikolai Tarasov */}
              </h3>
              <p className="team-text">
                {t('team.desc-3')}
                {/* Marketing */}
              </p>
              <ul className="team-flex">
                <li className="team-list-icon">
                  <a
                    href="https://www.instagram.com/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Instagram className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="https://twitter.com/?lang=uk"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Twitter className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="https://www.facebook.com/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Facebook className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="https://www.linkedin.com/"
                    aria-label="Linkedin"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Linkedin className="team-icon" />
                  </a>
                </li>
              </ul>
            </motion.li>

            <motion.li
              custom={5}
              variants={Animation}
              className="team-item element-animation"
            >
              <picture>
                <source
                  srcSet={DesignerMobile}
                  type="image/jpeg"
                  media="(max-width: 767px)"
                />
                <source
                  srcSet={DesignerTablet}
                  type="image/jpeg"
                  media="(min-width: 768px)"
                />
                <source
                  srcSet={DesignerDesctop}
                  type="image/jpeg"
                  media="(min-width:1200px)"
                />

                <img
                  width="100%"
                  height="auto"
                  loading="lazy"
                  className="lazyload"
                  data-src={DesignerDesctop}
                  alt="маркетолог"
                />
              </picture>

              <h3 className="team-subtitle">
                {t('team.subtitle-4')}
                {/* Mikhail Ermakov */}
              </h3>
              <p className="team-text">
                {t('team.desc-4')}
                {/* UI Designer */}
              </p>
              <ul className="team-flex">
                <li className="team-list-icon">
                  <a
                    href="https://www.instagram.com/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Instagram className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="https://twitter.com/?lang=uk"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Twitter className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="https://www.facebook.com/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Facebook className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="https://www.linkedin.com/"
                    aria-label="Linkedin"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Linkedin className="team-icon" />
                  </a>
                </li>
              </ul>
            </motion.li>
          </ul>
        </div>
      </motion.section>
    </>
  );
};

export default Team;
