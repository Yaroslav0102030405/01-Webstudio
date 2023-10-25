import React, { useState } from 'react';
import './AllPortfolio.scss';

import { useTranslation } from 'react-i18next';

import items from './Filter/Filter';
import Menu from './Menu/Menu.js';
import Button from './Button/Button';

// import Desctop1 from './Portfolio-img/Desctop/Desctop1.jpg';
// import Desctop2 from './Portfolio-img/Desctop/Desctop2.jpg';
// import Desctop3 from './Portfolio-img/Desctop/Desctop3.jpg';
// import Desctop4 from './Portfolio-img/Desctop/Desctop4.jpg';
// import Desctop5 from './Portfolio-img/Desctop/Desctop5.jpg';
// import Desctop6 from './Portfolio-img/Desctop/Desctop6.jpg';
// import Desctop7 from './Portfolio-img/Desctop/Desctop7.jpg';
// import Desctop8 from './Portfolio-img/Desctop/Desctop8.jpg';
// import Desctop9 from './Portfolio-img/Desctop/Desctop9.jpg';

// import Tablet1 from './Portfolio-img/Tablet/Tablet1.jpg';
// import Tablet2 from './Portfolio-img/Tablet/Tablet2.jpg';
// import Tablet3 from './Portfolio-img/Tablet/Tablet3.jpg';
// import Tablet4 from './Portfolio-img/Tablet/Tablet4.jpg';
// import Tablet5 from './Portfolio-img/Tablet/Tablet5.jpg';
// import Tablet6 from './Portfolio-img/Tablet/Tablet6.jpg';
// import Tablet7 from './Portfolio-img/Tablet/Tablet7.jpg';
// import Tablet8 from './Portfolio-img/Tablet/Tablet8.jpg';
// import Tablet9 from './Portfolio-img/Tablet/Tablet9.jpg';

// import Mobile1 from './Portfolio-img/Mobile/Mobile1.jpg';
// import Mobile2 from './Portfolio-img/Mobile/Mobile2.jpg';
// import Mobile3 from './Portfolio-img/Mobile/Mobile3.jpg';
// import Mobile4 from './Portfolio-img/Mobile/Mobile4.jpg';
// import Mobile5 from './Portfolio-img/Mobile/Mobile5.jpg';
// import Mobile6 from './Portfolio-img/Mobile/Mobile6.jpg';
// import Mobile7 from './Portfolio-img/Mobile/Mobile7.jpg';
// import Mobile8 from './Portfolio-img/Mobile/Mobile8.jpg';
// import Mobile9 from './Portfolio-img/Mobile/Mobile9.jpg';

const allCategories = ['All', ...new Set(items.map(item => item.description))];
console.log(allCategories);

const AllPortfolio = () => {
  const [t, i18n] = useTranslation('global');
  const [menuItem, setMenuItems] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  const filter = button => {
    if (button === 'All') {
      setMenuItems(items);
      return;
    }

    const filteredData = items.filter(item => item.description === button);
    setMenuItems(filteredData);
  };

  return (
    <>
      <section className="allportfolio">
        <div className="container">
          <Button button={buttons} filter={filter} />
          <Menu menuItem={menuItem} />
        </div>
      </section>
    </>
  );
};

export default AllPortfolio;
