import React from 'react';
import bgimg from '../assets/Image/image.gif'; 

function Resuablebtn({ onClose }) {
  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1050,
      }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        style={{
          maxWidth: '600px',
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          className="modal-content"
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            color: 'grey',
            textAlign: 'center',
            padding: '32px',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h4>Thanks for your request!</h4>
          <p>Our team will reach out soon.</p>
          <button
            type="button"
            className="btn btn-light mt-3"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resuablebtn;
