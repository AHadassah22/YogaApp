const express = require('express');
const router = express.Router();
const Enrollment = require('./enrollmentModel');

router.post('/enroll', async (req, res) => {
  try {
    const {
      name,
      email,
      address,
      age,
      timings,
      phone,
      emergencyContactName,
      emergencyContactNumber,
      medicalConditions,
      source,
      experienceLevel,
      agreeTerms,
    } = req.body;

    const enrollment = new Enrollment({
      name,
      email,
      address,
      age,
      timings,
      phone,
      emergencyContactName,
      emergencyContactNumber,
      medicalConditions,
      source,
      experienceLevel,
      agreeTerms,
    });

    await enrollment.save();

    res.status(201).json({ message: 'Enrollment successful!' });
  } catch (error) {
    console.error('Error during enrollment:', error);
    res.status(500).json({ message: 'An unexpected error occurred. Please try again.' });
  }
});

module.exports = router;
