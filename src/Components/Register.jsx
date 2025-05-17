import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      tempErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = 'Confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const existingUser = JSON.parse(localStorage.getItem('userData'));

      if (existingUser && existingUser.email === formData.email) {
        setErrors({ email: 'User with this email already exists' });
        return;
      }

      localStorage.setItem('userData', JSON.stringify(formData));
      alert('Registration successful!');
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    }
  };

  return (
    <>
    <div className="container mt-5">
      <h4>1:Register Form</h4>
      <div className="card shadow p-4" style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#111', color: 'white' }}>
        <h2 className="text-center mb-4">Register Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="text-danger mt-1">{errors.name}</div>}
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="text-danger mt-1">{errors.password}</div>}
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className="text-danger mt-1">{errors.confirmPassword}</div>}
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Register;
