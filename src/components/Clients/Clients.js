import React from 'react';
import { motion } from 'framer-motion';
import './Clients.scss';

import { ReactComponent as Client1 } from './../../images/svg1/client-1.svg';
import { ReactComponent as Client2 } from './../../images/svg1/client-2.svg';
import { ReactComponent as Client3 } from './../../images/svg1/client-3.svg';
import { ReactComponent as Client4 } from './../../images/svg1/client-4.svg';
import { ReactComponent as Client5 } from './../../images/svg1/client-5.svg';
import { ReactComponent as Client6 } from './../../images/svg1/client-6.svg';

const ClientsAnimation = {
  hidden: {
    // x: -100,
    opacity: 0,
  },
  visible: custom => ({
    // x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};

const Clients = () => {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        className="clients"
      >
        <div className="container">
          <motion.h2
            custom={23}
            variants={ClientsAnimation}
            class="clients-title element-animation"
          >
            Customers
          </motion.h2>
          <ul class="clients-list element-animation">
            <motion.li custom={24} variants={ClientsAnimation} class="clients-item">
              <a className="clients-logo" href="!#">
                <Client1 />
              </a>
            </motion.li>
            <motion.li custom={25} variants={ClientsAnimation} class="clients-item">
              <a className="clients-logo" href="!#">
                <Client2 />
              </a>
            </motion.li>
            <motion.li custom={26} variants={ClientsAnimation} class="clients-item">
              <a className="clients-logo" href="!#">
                <Client3 />
              </a>
            </motion.li>
            <motion.li custom={27} variants={ClientsAnimation} class="clients-item">
              <a className="clients-logo" href="!#">
                <Client4 />
              </a>
            </motion.li>
            <motion.li custom={28} variants={ClientsAnimation} class="clients-item">
              <a className="clients-logo" href="!#">
                <Client5 />
              </a>
            </motion.li>
            <motion.li custom={29} variants={ClientsAnimation} class="clients-item">
              <a className="clients-logo" href="!#">
                <Client6 />
              </a>
            </motion.li>
          </ul>
        </div>
      </motion.section>
    </>
  );
};

export default Clients;
