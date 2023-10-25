import React from "react";

import { useTranslation } from 'react-i18next';


const Menu = ({ menuItem }) => {
  const [t, i18n] = useTranslation('global');

  
    return (
      <>
            <ul className="allportfolio__item2">
              {menuItem.map(({ id, image, title, description }) => (
                <li className="allportfolio__link" key={id}>
                  <div className="box__active">
                    <img
                      loading="lazy"
                      className="lazyload"
                      src={image}
                      alt={title}
                    ></img>
                    <div className="box__overlay">{/* </a> */}</div>
                  </div>
                  <h2>{t('portfolio.name-1')}</h2>
                  <p>{t('portfolio.desc-1')}</p>
                </li>
              ))}
            </ul>

      </>
    );
}
 
export default Menu;