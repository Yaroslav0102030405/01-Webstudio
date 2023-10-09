import React from 'react';
import './Footer.scss';

import { useTranslation } from 'react-i18next';

import { ReactComponent as Instagram } from './../../images/svg1/instagram 2.svg';
import { ReactComponent as Twitter } from './../../images/svg1/twitter 1.svg';
import { ReactComponent as Facebook } from './../../images/svg1/facebook 1.svg';
import { ReactComponent as Linkedin } from './../../images/svg1/linkedin 1.svg';

const Footer = () => {
   const [t, i18n] = useTranslation('global');
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrap">
            <div className="footer-contact">
              <a className="logo element-animation" href="!#">
                <span className="logo-web">Web</span>
                <span className="logo-studio-footer">Studio</span>
              </a>
              <address className="address element-animation">
                <a
                  class="address-map"
                  href="https://goo.gl/maps/nESUi33Z9tEDnT8MA"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  {t('footer.addres')}
                  {/* Kiev, Lesia Ukrainka Ave, 26 */}
                </a>
                <a className="address-link" href="mailto:info@example.com">
                  {t('footer.email')}
                  {/* info@example.com */}
                </a>
                <a className="address-link no-margin" href="tel:++380991111111">
                  {t('footer.tel')}
                  {/* +38 099 111 11 11 */}
                </a>
              </address>
            </div>
            <div className="footer-icons">
              <b className="footer-text element-animation">
                {t('footer.social')}
                {/* Social media */}
              </b>
              <ul className="team-flex element-animation">
                <li className="footer-list-icon">
                  <a
                    href="#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Instagram className="footer-icon" />
                  </a>
                </li>
                <li class="footer-list-icon">
                  <a
                    href="#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Twitter className="footer-icon" />
                  </a>
                </li>
                <li class="footer-list-icon">
                  <a
                    href="#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Facebook className="footer-icon" />
                  </a>
                </li>
                <li class="footer-list-icon">
                  <a
                    href="#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Linkedin className="footer-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
