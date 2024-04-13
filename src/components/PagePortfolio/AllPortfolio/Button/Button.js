import React from 'react';
// import { NavLink } from 'react-router-dom';

// import './Button.scss'
// import portfolio from './../../../Translation/en/global.json'
// import Filter from '../Filter/Filter';

import { useTranslation } from 'react-i18next';

const Button = ({ button, filter, title }) => {
  const [t, i18n] = useTranslation('global');
  // const [buttons, setButtons] = useState('active')
  // const [t, i18n] = useTranslation('filter');

  return (
    <>
      <ul className="allportfolio__list">
        {button.map(description => {
          return (
            <li className="allportfolio__item">
              {/* <NavLink className={({ isActive }) => (isActive ? 'active' : '')}> */}
              <button
                type="button"
                onClick={() => filter(description)}
                aria-label="button filter"
              >
                {description}
                {/* {t('portfolio.btn')} */}
              </button>
              {/* </NavLink> */}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Button;
