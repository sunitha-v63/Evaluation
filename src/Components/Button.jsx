import React from 'react';
import CustomButton from './CustomButton';
import { FaCoffee, FaPaw } from 'react-icons/fa';

const Button = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <div className="text-center my-4">
        <h2>7.Reusable Button</h2>
        <div className="d-flex justify-content-center gap-3">
          <CustomButton
            label="Button1"
            variant="primary"
            onClick={handleClick}
            icon={FaPaw}
            className="mb-2"
          />
          <CustomButton
            label="Button2"
            variant="secondary"
            onClick={handleClick}
            icon={FaCoffee}
            className="mb-2"
          />
        </div>
      </div>
    </>
  );
};

export default Button;
