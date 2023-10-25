import React from 'react';
// import portfolio from './../../../Translation/en/global.json'
// import Filter from '../Filter/Filter';

import { useTranslation } from 'react-i18next';

const Button = ({ button, filter, title}) => {
  const [t, i18n] = useTranslation('global');
  // const [t, i18n] = useTranslation('filter');
  
  return (
    <>
      <ul className="allportfolio__list">
        {button.map((description) => {
          return (
            <li className="allportfolio__item">
              <button type="button" onClick={() => filter(description)}>
                {description}
                {/* {t('portfolio.btn')} */}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Button;
