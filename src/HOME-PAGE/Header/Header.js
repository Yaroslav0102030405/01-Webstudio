import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Dropdown from '../../components/Dropdown/Dropdown';
import DarkMode from './../../components/DarkMode/DarkMode';

// import i18next from 'i18next';

import { useTranslation } from 'react-i18next';
// import i18n from '../i18n/i18n';

const Header = () => {
  const [t, i18n] = useTranslation('global');
 

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

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
                    <Link className="menu__link current js__link" to="/">
                      {t('header.home')}
                      {/* {content.home} */}
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link class="menu__link" to="/portfolio">
                      {t('header.portfolio')}
                      {/* {content.portfolio} */}
                    </Link>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link" href="/">
                      {t('header.contacts')}
                      {/* {content.contacts} */}

                      {/* Contacts */}
                    </a>
                  </li>
                </ul>
                {/* <DarkMode /> */}
                <ul className="menu__contacts">
                  <li className="contacts__item">
                    {/* <a
                        className="contacts__link contacts__icon"
                        href="mailto:info@example.com"
                      > */}
                    {/* <DarkMode /> */}
                    {/* <Envelope className="contacts__svg-envelope" />
                      info@example.com */}
                    {/* </a> */}
                  </li>
                </ul>
              </nav>
            </div>

            <div className="mobile-2">
              {/* <select
              value={language}
              onChange={e => {
                setLanguage(e.target.value);
              }}
            >
              <option>EN</option>
              <option>UK</option>
              <option>RU</option>
            </select> */}
              <DarkMode />
              <ul className="multilanguage">
                <li className="text">
                  {' '}
                  <button
                    className="menu__btn"
                    onClick={() => handleChangeLanguage('en')}
                  >
                    EN
                  </button>
                </li>
                <li className="text">
                  {' '}
                  <button
                    className="menu__btn"
                    onClick={() => handleChangeLanguage('uk')}
                  >
                    UK
                  </button>
                </li>
                <li className="text">
                  {' '}
                  <button
                    className="menu__btn"
                    onClick={() => handleChangeLanguage('ru')}
                  >
                    RU
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
// }

export default Header;
