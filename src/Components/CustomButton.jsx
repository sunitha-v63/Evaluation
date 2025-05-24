import React from 'react';
import Button from 'react-bootstrap/Button';

const CustomButton = ({ label, variant = 'primary', onClick, icon: Icon }) => {
  return (
    <Button variant={variant} onClick={onClick} className="d-flex align-items-center">
      {Icon && <Icon className="me-2" />}
      {label}
    </Button>
  );
};

export default CustomButton;
