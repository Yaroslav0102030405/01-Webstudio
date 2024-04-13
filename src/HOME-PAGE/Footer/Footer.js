import React from 'react';
import './Footer.scss';

import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';

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

const Footer = () => {
  const [t, i18n] = useTranslation('global');
  return (
    <>
      <motion.footer initial="hidden" whileInView="visible" className="footer">
        <div className="container">
          <div className="footer-wrap">
            <motion.div
              custom={1}
              variants={Animation}
              className="footer-contact"
            >
              <a className="logo element-animation" href="!#">
                <span className="logo-web">Web</span>
                <span className="logo-studio-footer">Studio</span>
              </a>
              <address className="address element-animation">
                <a
                  aria-label="link to map"
                  className="address-map"
                  href="https://goo.gl/maps/nESUi33Z9tEDnT8MA"
                  target="_blank"
                  rel="noopener noreferer noreferrer"
                >
                  {t('footer.addres')}
                </a>
                <a
                  aria-label="link to email"
                  className="address-link"
                  href="mailto:info@example.com"
                >
                  {t('footer.email')}
                  {/* info@example.com */}
                </a>
                <a
                  aria-label="link to tel"
                  className="address-link no-margin"
                  href="tel:++380991111111"
                >
                  {t('footer.tel')}
                  {/* +38 099 111 11 11 */}
                </a>
              </address>
            </motion.div>
            <motion.div
              custom={2}
              variants={Animation}
              className="footer-icons"
            >
              <b className="footer-text element-animation">
                {t('footer.social')}
                {/* Social media */}
              </b>
              <ul className="team-flex element-animation">
                <li className="footer-list-icon">
                  <a
                    href="https://www.instagram.com/"
                    aria-label="link to instagram"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Instagram
                      aria-label="Ссилка на Instagram"
                      className="footer-icon"
                    />
                  </a>
                </li>
                <li className="footer-list-icon">
                  <a
                    href="https://twitter.com/?lang=uk"
                    aria-label="link to client1"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Twitter
                      aria-label="Ссилка на Twitter"
                      className="footer-icon"
                    />
                  </a>
                </li>
                <li className="footer-list-icon">
                  <a
                    href="https://www.facebook.com/"
                    aria-label="link to facebook"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Facebook
                      aria-label="Ссилка на facebook"
                      className="footer-icon"
                    />
                  </a>
                </li>
                <li className="footer-list-icon">
                  <a
                    href="https://www.linkedin.com/"
                    aria-label="link to linkedin"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Linkedin
                      aria-label="Ссилка на Linkedin"
                      className="footer-icon"
                    />
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
