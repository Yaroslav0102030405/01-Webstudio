import React from "react";
import { Link } from 'react-router-dom';
// import './../../components/Header/Header.scss';
import Dropdown from "../Dropdown/Dropdown";

import { ReactComponent as Envelope } from './../../images/svg1/envelope (hover).svg';
import { ReactComponent as Smartphone } from './../../images/svg1/smartphone.svg';

const Portfolio = () => {
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
                <Link className="logo" to="/">
                  <span className="logo__web">Web</span>
                  <span className="logo__studio">Studio</span>
                </Link>
                <Dropdown />

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
                      <Link className="menu__link js__link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link class="menu__link current" to="/portfolio">
                        Portfolio
                      </Link>
                    </li>
                    <li className="menu__item">
                      <a className="menu__link" href="/">
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
}
 
export default Portfolio;