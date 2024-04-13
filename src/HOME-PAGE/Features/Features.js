import React from 'react';
import { motion } from 'framer-motion';
import './Features.scss';

import { useTranslation } from 'react-i18next';

const Animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Features = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        className="features"
      >
        <div className="container">
          <h2 className="visually-hidden">Преимущества</h2>

          <ul className="features-list">
            <motion.li
              custom={1}
              variants={Animation}
              className="features-item element-animation"
            >
              <motion.h3
                custom={2}
                variants={Animation}
                className="features-title"
              >
                {t('features.title-1')}
              </motion.h3>
              <motion.p
                custom={3}
                variants={Animation}
                className="features-text"
              >
                {t('features.desc-1')}
              </motion.p>
            </motion.li>
            <motion.li
              custom={4}
              variants={Animation}
              className="features-item element-animation"
            >
              <motion.h3
                custom={5}
                variants={Animation}
                className="features-title"
              >
                {t('features.title-2')}
              </motion.h3>
              <motion.p
                custom={6}
                variants={Animation}
                className="features-text"
              >
                {t('features.desc-2')}
              </motion.p>
            </motion.li>
            <motion.li
              custom={7}
              variants={Animation}
              className="features-item element-animation"
            >
              <motion.h3
                custom={8}
                variants={Animation}
                className="features-title"
              >
                {t('features.title-3')}
              </motion.h3>
              <motion.p
                custom={9}
                variants={Animation}
                className="features-text"
              >
                {t('features.desc-3')}
              </motion.p>
            </motion.li>
            <motion.li
              custom={10}
              variants={Animation}
              className="features-item element-animation"
            >
              <motion.h3
                custom={11}
                variants={Animation}
                className="features-title"
              >
                {t('features.title-4')}
              </motion.h3>
              <motion.p
                custom={12}
                variants={Animation}
                className="features-text"
              >
                {t('features.desc-4')}
              </motion.p>
            </motion.li>
          </ul>
        </div>
      </motion.section>
    </>
  );
};

export default Features;
