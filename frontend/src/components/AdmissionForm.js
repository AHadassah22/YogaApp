// AdmissionForm.js
import React, { useState } from 'react';
import './AdmissionForm.css'; // Import CSS file for styling

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    age: '',
    timings: '',
    phone: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    medicalConditions: '',
    source: '',
    experienceLevel: '',
    agreeTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch('http://localhost:3001/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // Step 2: Process the payment
      const paymentResponse = await fetch('http://localhost:3001/api/completePayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Enrollment successful:', result);

        setSuccessMessage('Enrollment successful!');
        setFormData({
          name: '',
          email: '',
          address: '',
          age: '',
          timings: '',
          phone: '',
          emergencyContactName: '',
          emergencyContactNumber: '',
          medicalConditions: '',
          source: '',
          experienceLevel: '',
          agreeTerms: false,
        });
      } else {
        console.error('Enrollment failed:', response.statusText);

        setErrorMessage('Enrollment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during enrollment:', error);

      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admission-container">
      <img
        src="yoga.avif"
        alt="Logo"
        className="logo"
        // style={{ border: '4px solid black' }}
        /* Add a red border to help identify the image */
        onError={(e) => console.error('Error loading image:', e)}
      />
      <h2>Yoga Class Admission Form</h2>
      <p>Join our monthly yoga classes and embark on a journey to wellness!</p>

      <form className="admission-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </label>
        </div>

        <div className="form-group">
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
        </div>

        <div className="form-group">
          <label>
            Address:
            <textarea name="address" value={formData.address} onChange={handleInputChange} />
          </label>
        </div>

        <div className="form-group">
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              min="18"
              max="65"
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Timings:
            <select name="timings" value={formData.timings} onChange={handleInputChange}>
              <option value="">Select Timings</option>
              <option value="6-7AM">6-7AM</option>
              <option value="7-8AM">7-8AM</option>
              <option value="8-9AM">8-9AM</option>
              <option value="5-6PM">5-6PM</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            Phone Number:
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
          </label>
        </div>

        <div className="form-group">
          <label>
            Emergency Contact Name:
            <input
              type="text"
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Emergency Contact Number:
            <input
              type="tel"
              name="emergencyContactNumber"
              value={formData.emergencyContactNumber}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Medical Conditions:
            <textarea
              name="medicalConditions"
              value={formData.medicalConditions}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            How Did You Hear About Us:
            <select
              name="source"
              value={formData.source}
              onChange={handleInputChange}
            >
              <option value="">Select Source</option>
              <option value="Online">Online</option>
              <option value="Friend">Friend</option>
              <option value="Advertisement">Advertisement</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            Yoga Experience Level:
            <select
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleInputChange}
            >
              <option value="">Select Experience Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
            />
            I agree to the terms and conditions
          </label>
        </div>

        <div className="form-group">
          {/* Display success message */}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

          {/* Display error message */}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          {/* Display loading indicator */}
          {loading && <p>Loading...</p>}

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
