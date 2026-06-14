// src/components/SignUp.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import axios from 'axios'; // Import Axios
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNumber: '',
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Updated to use useNavigate

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.fullName) formErrors.fullName = 'Full Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
    if (!formData.password) formErrors.password = 'Password is required';
    if (formData.password.length < 6) formErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agreedToTerms) formErrors.agreedToTerms = 'You must agree to the terms and conditions';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit form data to backend or API
      try {
        const response = await axios.post('http://localhost:8080/api/signup', formData); // Update the URL with your API endpoint
        console.log("sgnup....",response)
        if (response.status === 201) {
          console.log('Form Submitted', formData);
          navigate('/login'); // Updated to use navigate
        } else {
          console.error('Error:', response.data.message);
        }
      } catch (error) {
        console.error('An error occurred:', error.response.data.message || error.message);
        setErrors({ apiError: error.response.data.message || 'An error occurred while signing up' });
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>
        Sign <span>Up</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <div className="form-group">
          <label>Address (optional)</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone Number (optional)</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
            />
            I agree to the <a href="/terms">terms and conditions</a>
          </label>
          {errors.agreedToTerms && <span className="error">{errors.agreedToTerms}</span>}
        </div>
        {errors.apiError && <div className="api-error">{errors.apiError}</div>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
