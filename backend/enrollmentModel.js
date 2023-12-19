const mongoose = require('mongoose');

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

module.exports = Enrollment;
