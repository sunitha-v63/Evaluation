import React, { useState, useEffect } from 'react';
import Button from './Button';
import { FaPaw } from 'react-icons/fa';
import Resuablebtn from './Resuablebtn';

function Booking() {
  const [showModal, setShowModal] = useState(false);  
  const [showBooking, setShowBooking] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    date: '',
    time: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('bookingData'));
    if (savedData) setFormData(savedData);
  }, []);

  const handleDonateClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSecondaryClick = () => {
    setShowBooking(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.name.trim()) validationErrors.name = 'Name is required';
    if (!formData.guests.trim() || isNaN(formData.guests)) validationErrors.guests = 'Valid number of guests required';
    if (!formData.date) validationErrors.date = 'Date is required';
    if (!formData.time.trim()) validationErrors.time = 'Time is required';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem('bookingData', JSON.stringify(formData));
      alert('Booking successful!');
      setFormData({ name: '', guests: '', date: '', time: '' });
      setShowBooking(false);
    }
  };

  return (
    <div className="container py-5">
      <h4>7.Resuable Button Components</h4>
      <Button
        label="Donate Now"
        variant="primary"
        onClick={handleDonateClick}
        icon={<FaPaw />}
      />

      {showModal && <Resuablebtn onClose={handleClose} />}

      <br /><br />
      <Button
        label="Secondary Button"
        variant="secondary"
        onClick={handleSecondaryClick}
      />

      {/* Booking Form */}
      {showBooking && (
        <>
          <div className="container bg-black text-white py-5">
            <h1 className="Title display-3" style={{ color: '#F8D49E' }}>
              Booking
            </h1>
          </div>

          <div className="container bg-black text-white py-5">
            <form className="form" onSubmit={handleSubmit}>
              <h1>Book a table</h1>
              <p className="fs-5 mb-5">
                Our dining atmosphere is casual and comfortable. <br />
                To reflect this environment, we maintain a formal dress.
              </p>

              <div className="form-group mb-5">
                <div className="mb-5">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ backgroundColor: 'black', color: 'white', borderColor: '#F8D49E', padding: '14px' }}
                  />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div className="mb-5">
                  <label htmlFor="guests" className="form-label">Number of Guests</label>
                  <input
                    type="text"
                    className="form-control"
                    name="guests"
                    placeholder="0"
                    value={formData.guests}
                    onChange={handleChange}
                    style={{ backgroundColor: 'black', color: 'white', borderColor: '#F8D49E', padding: '14px' }}
                  />
                  {errors.guests && <small className="text-danger">{errors.guests}</small>}
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      style={{ backgroundColor: 'black', color: 'white', borderColor: '#F8D49E', padding: '14px' }}
                    />
                    {errors.date && <small className="text-danger">{errors.date}</small>}
                  </div>
                  <div className="col">
                    <label htmlFor="time" className="form-label">Time</label>
                    <input
                      type="text"
                      className="form-control"
                      name="time"
                      placeholder="TIME"
                      value={formData.time}
                      onChange={handleChange}
                      style={{ backgroundColor: 'black', color: 'white', borderColor: '#F8D49E', padding: '14px' }}
                    />
                    {errors.time && <small className="text-danger">{errors.time}</small>}
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary w-50 p-3"
                  type="submit"
                  style={{ backgroundColor: '#F8D49E', color: 'black', border: 'none', borderRadius: '50px' }}
                >
                  BOOK A TABLE
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Booking;
