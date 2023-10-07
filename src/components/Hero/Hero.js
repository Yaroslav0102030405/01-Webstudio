import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './Hero.scss';
import Modal from '../Modal/Modal';
import './../../components/Modal/Modal.scss';

// import { useTranslation } from 'react-i18next';



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


class Hero extends Component {
   state = {
    showModal: false,
  };
 

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };


  render() {
    // const [t, i18n] = useTranslation('global');

    const { showModal } = this.state;

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
              {/* {t('hero.title')} */}
              Effective Solutions <br />
              for Your Business
            </motion.h1>

            <motion.button
              custom={2}
              variants={Animation}
              className="btn"
              type="button"
              onClick={this.toogleModal}
            >
              Order Service
            </motion.button>
            {showModal && (
              <Modal onClose={this.toogleModal}>
                <form className="form">
                  <button
                    className="btn__clouse hover form__icon"
                    type="button"
                    onClick={this.toogleModal}
                  >
                    x
                  </button>
                  <h1 className="form__title">
                    Leave your details, we will call you back
                  </h1>
                  <input
                    className="form__input"
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="name"
                    placeholder="Name"
                    required
                  ></input>
                  <input
                    className="form__input"
                    type="tel"
                    name="tel"
                    id="tel"
                    autocomplete="tel"
                    placeholder="Phone"
                    required
                  ></input>
                  <input
                    className="form__input"
                    type="email"
                    name="mail"
                    id="mail"
                    autocomplete="email"
                    placeholder="Email"
                    required
                  ></input>
                  <textarea
                    name="comment"
                    id="comment"
                    rows="10"
                    placeholder="Comment"
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
                      I accept the terms and conditions of the
                    </span>
                    <a className="form__link" href="!#">
                      <span>Privacy Policy</span>
                    </a>
                  </label>
                  <button className="btn" type="submit">
                    Submit
                  </button>
                </form>
              </Modal>
            )}
          </div>
        </motion.section>
      </div>
    );
  }
};

export default Hero;
