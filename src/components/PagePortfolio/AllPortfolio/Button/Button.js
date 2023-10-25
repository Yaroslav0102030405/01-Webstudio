import React from 'react';

const Button = ({ button, filter }) => {
  return (
    <>
      {button.map((description, id) => {
        return (
          <button type="button" onClick={() => filter(description)}>
            {description}
          </button>
        );
      })}
    </>
  );
};

export default Button;
