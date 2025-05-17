import React, { useState } from 'react';
import Modal from './Modal';

function Task1() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!isEligible) {
      setError('You must confirm that you are 18 or older to vote.');
    } else {
      setError('');
      setModalOpen(false);
      alert('Thank you! You are eligible to vote.');
    }
  };

  return (
    <>
   
    <div className="container mt-5 text-center">
       <h4>2.Modal Popup Component</h4>
      <button className="btn btn-danger" onClick={() => setModalOpen(true)}>
        Show Terms & Conditions
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h4>Terms & Conditions</h4>
        <p className='fs-5'>
          To vote, you must be at least 18 years old. By continuing, you confirm that you meet this requirement.
        </p>

        <div className="form-check mt-3 mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="voterCheck"
            checked={isEligible}
            onChange={() => setIsEligible(!isEligible)}
          />
          <label className="form-check-label" htmlFor="voterCheck">
            I confirm I am 18 years
          </label>
        </div>

        {error && <div className="text-danger mb-2">{error}</div>}

        <button className="btn btn-success" onClick={handleSubmit}>
          Confirm
        </button>
      </Modal>
    </div>
    </>
  );
}

export default Task1;
