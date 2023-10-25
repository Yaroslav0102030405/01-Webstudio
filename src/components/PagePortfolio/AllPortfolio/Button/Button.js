import React from 'react';

import { useTranslation } from 'react-i18next';

const Button = ({ button, filter, title }) => {
  const [t, i18n] = useTranslation('global');
  
  return (
    <>
      <ul className="allportfolio__list">
        {button.map((description, id) => {
          return (
            <li className="allportfolio__item">
              <button type="button" onClick={() => filter(description)}>
                {description}
                {/* {t('portfolio.desc-1')} */}
             
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Button;
