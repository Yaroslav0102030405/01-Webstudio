import React from 'react';
import './Footer.scss';

import { ReactComponent as Instagram } from './../../images/svg1/instagram 2.svg';
import { ReactComponent as Twitter } from './../../images/svg1/twitter 1.svg';
import { ReactComponent as Facebook } from './../../images/svg1/facebook 1.svg';
import { ReactComponent as Linkedin } from './../../images/svg1/linkedin 1.svg';

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="footer-wrap">
            <div class="footer-contact">
              <a class="logo element-animation" href="!#">
                <span class="logo-web">Web</span>
                <span class="logo-studio-footer">Studio</span>
              </a>
              <address class="address element-animation">
                <a
                  class="address-map"
                  href="https://goo.gl/maps/nESUi33Z9tEDnT8MA"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  Kiev, Lesia Ukrainka Ave, 26
                </a>
                <a class="address-link" href="mailto:info@example.com">
                  info@example.com
                </a>
                <a class="address-link no-margin" href="tel:++380991111111">
                  +38 099 111 11 11
                </a>
              </address>
            </div>
            <div class="footer-icons">
              <b class="footer-text element-animation">Social media</b>
              <ul class="team-flex element-animation">
                <li class="footer-list-icon">
                  <a
                    href="!#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Instagram className="footer-icon" />
                  </a>
                </li>
                <li class="footer-list-icon">
                  <a
                    href="!#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Twitter className="footer-icon" />
                  </a>
                </li>
                <li class="footer-list-icon">
                  <a
                    href="!#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Facebook className="footer-icon" />
                  </a>
                </li>
                <li class="footer-list-icon">
                  <a
                    href="!#"
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
