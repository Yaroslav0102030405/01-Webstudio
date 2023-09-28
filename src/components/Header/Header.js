import React from 'react';
import './Header.scss';

// import { Icon } from '../../Icons';

const Header = () => {
  return (
    <>
      <header class="header">
        <div className="container">
          <div className="header__wrap">
            <div className="mobile__wrap">
              <a className="logo" href="./index.html">
                <span className="logo__web">Web</span>
                <span className="logo__studio">Studio</span>
              </a>

              <button
                type="button"
                className="mobile__btn is__open"
                data-menu-button
              >
                {/* </svg>
                <svg
                  width="40"
                  height="40"
                  aria-label="Переключатель мобильного меню"
                >
                  <use
                    className="icon__close"
                    href="sprite.icon-menu_40px"
                  ></use>
                  <use className="icon__menu"></use>
                </svg>

                <Icon id="icon-close_40px" /> */}
              </button>
            </div>

            <div className="menu__burger" data-menu>
              <nav className="header__nav">
                <ul className="menu">
                  <li className="menu__item">
                    <a className="menu__link current js__link" href="!#">
                      Studio
                    </a>
                  </li>
                  <li className="menu__item">
                    <a class="menu__link" href="./portfolio.html">
                      Portfolio
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link" href="!#">
                      Contacts
                    </a>
                  </li>
                </ul>
                <ul className="menu__contacts">
                  <li className="contacts__item">
                    <a
                      className="contacts__link contacts__icon"
                      href="mailto:info@example.com"
                    >
                      {/* <svg className="contacts__svg" width="16px" height="12px">
                        <use href="sprite.icon-envelope"></use>
                      </svg> */}
                      info@example.com
                    </a>
                  </li>

                  <li className="contacts__item">
                    <a
                      className="contacts__link contacts__icon"
                      href="tel:+380961111111"
                    >
                      <svg className="contacts__svg" width="10px" height="16px">
                        <use href="sprite.icon-smartphone"></use>
                      </svg>
                      +38 096 111 11 11
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
