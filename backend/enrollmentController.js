// Assuming you are using Express for your backend

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/yoga-enrollment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const enrollmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  age: Number,
  timings: String,
  phone: String,
  emergencyContactName: String,
  emergencyContactNumber: String,
  medicalConditions: String,
  source: String,
  experienceLevel: String,
  agreeTerms: Boolean,
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

app.use(express.json());

app.post('/api/enroll', async (req, res) => {
  try {
    // Assuming req.body contains the form data
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

    // Validate data (add your validation logic here)

    // Save to the database
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
