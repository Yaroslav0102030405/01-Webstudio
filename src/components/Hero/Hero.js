import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.scss';
import Modal from '../Modal/Modal';
import './../../components/Modal/Modal.scss';

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

const Hero = () => {
  const [t, i18n] = useTranslation('global');
  const [showModal, setState] = useState(false);
  //  state = {
  //   showModal: false,
  // };

  const toogleModal = () => {
    setState(!showModal);
  };

  // render() {

  // const [t, i18n] = useTranslation('global');

  // const { showModal } = this.state;

  return (
    <div className="overlay">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="hero center"
      >
        <div className="container hero-container">
          <motion.h1 custom={1} variants={Animation} className="hero__title">
            {t('hero.title')}
            {/* Effective Solutions <br />
              for Your Business */}
          </motion.h1>

          <motion.button
            custom={2}
            variants={Animation}
            className="btn"
            type="button"
            onClick={toogleModal}
          >
            {t('hero.btn')}
            {/* Order Service */}
          </motion.button>
          {showModal && (
            <Modal onClose={toogleModal}>
              <form className="form">
                <button
                  className="btn__clouse hover form__icon"
                  type="button"
                  onClick={toogleModal}
                >
                  X
                </button>
                <h1 className="form__title">
                  {t('form.title')}
                  {/* Leave your details, we will call you back */}
                </h1>
                <input
                  className="form__input"
                  type="text"
                  name="name"
                  id="name"
                  autocomplete="name"
                  placeholder={t('form.name')}
                  required
                ></input>
                <input
                  className="form__input"
                  type="tel"
                  name="tel"
                  id="tel"
                  autocomplete="tel"
                  placeholder={t('form.phone')}
                  required
                ></input>
                <input
                  className="form__input"
                  type="email"
                  name="mail"
                  id="mail"
                  autocomplete="email"
                  placeholder={t('form.email')}
                  required
                ></input>
                <textarea
                  name="comment"
                  id="comment"
                  rows="10"
                  placeholder={t('form.comment')}
                ></textarea>

                <label>
                  <input
                    className="real__checkbox"
                    type="checkbox"
                    name="topic"
                    value="js"
                    id="js"
                    required
                  ></input>
                  <span className="custom__checkbox"></span>
                  <span className="form__text">
                    {t('form.checkbox')}
                    {/* I accept the terms and conditions of the */}
                  </span>
                  <a className="form__link" href="!#">
                    <span>{t('form.span')}</span>
                  </a>
                </label>
                <button className="btn" type="submit">
                  {t('form.btn')}
                </button>
              </form>
            </Modal>
          )}
        </div>
      </motion.section>
    </div>
  );
};
// };

export default Hero;
