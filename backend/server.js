const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const enrollmentRouter = require('./enrollmentRouter');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// Enable CORS (set headers to allow all origins)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yoga-enrollment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use the enrollment router
app.use('/api', enrollmentRouter);

// Add a simple GET route
app.get('/api/enroll', (req, res) => {
  // Handle GET requests (you can provide some information or render a page)
  res.send('GET request to /api/enroll');
});

// Mock payment function
function completePayment(user) {
  // Mock implementation, you can replace this with your payment logic
  console.log(`Processing payment for user: ${user.name}`);
  return 'success'; // Change this to simulate different payment outcomes
}

// Mock payment route
app.post('/api/completePayment', (req, res) => {
  const user = req.body;

  // Log statement for processing payment
  console.log(`Processing the payment for user: ${user.name}`);

  // Mock payment function
  const paymentStatus = completePayment(user);

  // Respond based on payment status
  if (paymentStatus === 'success') {
    res.status(200).json({ message: 'Payment successful', user });
  } else {
    res.status(500).json({ error: 'Payment failed', user });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
