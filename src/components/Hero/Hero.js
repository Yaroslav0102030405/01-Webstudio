import React from 'react';
import { motion } from 'framer-motion';
import './Hero.scss';

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

function Hero () {

  return (
    <>
      <div className="overlay">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="hero center"
        >
          <div className="container hero-container">
            <motion.h1
              custom={1}
              variants={Animation}
              className="hero-title element-animation"
            >
              Effective Solutions <br />
              for Your Business
            </motion.h1>
           
            {/* <motion.button
              custom={2}
              variants={Animation}
              className="btn"
              type="button"
            >
              Order Service
            </motion.button> */}
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Hero;
