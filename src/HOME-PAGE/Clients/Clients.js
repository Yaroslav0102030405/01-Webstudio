import React from 'react';
import { motion } from 'framer-motion';
import './Clients.scss';

import { useTranslation } from 'react-i18next';

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
    transition: { delay: custom * 0.2 },
  }),
};

const Clients = () => {
  const [t, i18n] = useTranslation('global');
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="clients"
      >
        <div className="container">
          <motion.h2
            custom={1}
            variants={ClientsAnimation}
            class="clients-title element-animation"
          >
            {t('clients.title')}
            {/* Customers */}
          </motion.h2>
          <ul class="clients-list element-animation">
            <motion.li
              custom={2}
              variants={ClientsAnimation}
              class="clients-item"
            >
              <a className="clients-logo" href="/">
                <Client1 />
              </a>
            </motion.li>
            <motion.li
              custom={3}
              variants={ClientsAnimation}
              class="clients-item"
            >
              <a className="clients-logo" href="/">
                <Client2 />
              </a>
            </motion.li>
            <motion.li
              custom={4}
              variants={ClientsAnimation}
              class="clients-item"
            >
              <a className="clients-logo" href="/">
                <Client3 />
              </a>
            </motion.li>
            <motion.li
              custom={5}
              variants={ClientsAnimation}
              class="clients-item"
            >
              <a className="clients-logo" href="/">
                <Client4 />
              </a>
            </motion.li>
            <motion.li
              custom={6}
              variants={ClientsAnimation}
              class="clients-item"
            >
              <a className="clients-logo" href="/">
                <Client5 />
              </a>
            </motion.li>
            <motion.li
              custom={7}
              variants={ClientsAnimation}
              class="clients-item"
            >
              <a className="clients-logo" href="/">
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
