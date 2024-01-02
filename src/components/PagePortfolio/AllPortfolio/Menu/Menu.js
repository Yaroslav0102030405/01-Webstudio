import React from "react";

import { motion } from 'framer-motion';

const Animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};


// import { useTranslation } from 'react-i18next';
const Menu = ({ menuItem }) => {
  // const [t, i18n] = useTranslation('global');

  
    return (
      <>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          className="allportfolio__item2"
        >
          {menuItem.map(({ id, image, title, description }) => (
            <motion.li
              // custom={2}
              variants={Animation}
              className="allportfolio__link"
              key={id}
            >
              <div className="box__active">
                <img
                  width="100%"
                  height="auto"
                  loading="lazy"
                  className="lazyload"
                  src={image}
                  alt={title}
                ></img>
                <div className="box__overlay"></div>
              </div>
              <h2>{title}</h2>
              <p>{description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </>
    );
}
 
export default Menu;