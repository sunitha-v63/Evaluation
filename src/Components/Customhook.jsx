import React from 'react';
import useToggle from './useToggle';
import img1 from '../assets/Image/image2.png'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
function Customhook() {
  const [showDonation, toggleDonation] = useToggle(false);

  return (
    <>
    <div className="container py-5 text-center">
      <h4>4.Custom useToggle Hooks</h4>
      <button className="btn btn-success mb-4" onClick={toggleDonation}>
        {showDonation ? 'Hide Toggle' : 'Show Toggle'}
      </button>

      {showDonation && (
        <div>
          <div className="col-md-12 text-center mb-4">
            <h3>
              <span>
                <i className="fas fa-paw paw-icon fs-6 bounce"></i>
                <i className="fas fa-paw paw-icon fs-6"></i>
              </span>{' '}
              Help Us Make a Difference
            </h3>
            <h6>Your support can save lives, one paw at a time</h6>
          </div>

          <div className="row align-items-center justify-content-center" style={{ marginBottom: '-7%' }}>
            <div className="col-md-3">
              <img
                src={img1}
                className="img-fluid"
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
                alt="Donate"
              />
            </div>
            <div className="col-md-6 text-start">
              <h3>Donate</h3>
              <p style={{ fontSize: '17px' }}>
                Your donation directly supports rescued pets—feeding, vaccination, shelter, and medical care.
                Even the smallest contribution makes a big impact.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Customhook;
