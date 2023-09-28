import React from 'react';
import Icons from './images/sprite.svg';

export const Icon = ({ id }) => {
  return (
    <svg>
      <use href={Icons + '#icon-' + id}></use>
    </svg>
  );
};
