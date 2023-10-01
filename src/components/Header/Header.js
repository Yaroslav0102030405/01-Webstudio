import React from 'react';
import './Header.scss';

import { ReactComponent as Envelope } from './../../images/svg1/envelope (hover).svg';
import { ReactComponent as Smartphone } from './../../images/svg1/smartphone.svg';

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [hideOrShow, setHideOrShow] = useState({});

  // const handleMenu = () => {
  //   setIsOpen((prev) => !prev);
  //   if (isOpen) {
  //     setHideOrShow(() => {
  //       return {}
  //     })
  //   } else {
  //     setHideOrShow(() => {
  //       return {display: "flex"}
  //     })
  //   }
  // }
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrap">
            {/* {isOpen ? (
              <button onClick={handleMenu}>Clouse</button>
            ) : (
              <button  onClick={handleMenu}>
                Open
              </button>
            )} */}
            <div className="mobile__wrap">
              <a className="logo" href="./index.html">
                <span className="logo__web">Web</span>
                <span className="logo__studio">Studio</span>
              </a>

              <button
                type="button"
                className="mobile__btn is__open"
                data-menu-button
              ></button>
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
                      <Envelope className="contacts__svg-envelope" />
                      info@example.com
                    </a>
                  </li>

                  <li className="contacts__item">
                    <a
                      className="contacts__link contacts__icon"
                      href="tel:+380961111111"
                    >
                      <Smartphone className="contacts__svg" />
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
