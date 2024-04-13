import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Dropdown from '../../components/Dropdown/Dropdown';
import DarkMode from './../../components/DarkMode/DarkMode';

import { useTranslation } from 'react-i18next';

const Header = () => {
  const [t, i18n] = useTranslation('global');

  const handleChangeLanguage = lang => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrap">
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
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link class="menu__link" to="/portfolio">
                      {t('header.portfolio')}
                    </Link>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link" href="/">
                      {t('header.contacts')}
                    </a>
                  </li>
                </ul>
                <ul className="menu__contacts">
                  <li className="contacts__item"></li>
                </ul>
              </nav>
            </div>

            <div className="mobile-2">
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
