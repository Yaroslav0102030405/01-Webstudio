import React from "react";

// import { useTranslation } from 'react-i18next';
const Menu = ({ menuItem }) => {
  // const [t, i18n] = useTranslation('global');

  
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
                <div className="box__overlay"></div>
              </div>
              <h2>{title}</h2>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </>
    );
}
 
export default Menu;