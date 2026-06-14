import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    }

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true); // Set loading state

      // Log the data being sent for debugging purposes
      console.log("Submitting the following data:", formData);

      try {
        const response = await axios.post( 'http://localhost:8080/api/login',formData,
          {
            headers: { 'Content-Type': 'application/json' }, // Make sure the correct header is sent
          }
        );

        console.log("Server Response:", response); // Log the full response from server

        if (response.status === 200) {
          console.log('Login Successful', response.data);
          navigate('/'); // Navigate to home page on successful login
        } else {
          console.error('Login failed:', response.data.message);
          setErrors({ apiError: response.data.message || 'Login failed' });
        }
      } catch (error) {
        console.error('An error occurred:', error); // Log the entire error object
        console.error('Error details:', error.response ? error.response.data : error.message);
        setErrors({ apiError: error.response?.data?.message || 'An error occurred during login' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="login-container">
      <h2>
        Log<span>in</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        {errors.apiError && <div className="api-error">{errors.apiError}</div>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
