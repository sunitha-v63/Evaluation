import React from 'react';

function Button({ label, variant = 'primary', onClick, icon }) {
  const buttonClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button
      className={`btn ${buttonClass} p-3`}
      type="button"
      onClick={onClick}
      style={{
        backgroundColor: variant === 'primary' ? 'lightblue' : 'lightgreen',
        color: 'black',
        borderRadius: '50px',
        outline: 'none',
        border: 'none',
      }}
    >
      {icon && <span className="me-2">{icon}</span>} {label}
    </button>
  );
}

export default Button;
