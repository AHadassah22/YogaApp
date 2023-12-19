
Yoga Class Enrollment App
This is a simple web application for managing enrollments and processing payments for a yoga class. The application uses a Node.js backend with Express for handling HTTP requests, MongoDB for data storage, and a React frontend for user interaction.

Refere to the "WorkingScreenshots" word file in the root directory to get an overview.

Prerequisites
Before running the application, make sure you have the following installed:

Node.js
MongoDB

Getting Started

Clone the repository:
git clone https://github.com/your-username/your-repo.git

Navigate to the project directory:
cd your-repo

Start the frontend:
cd frontend
npm start
Open your browser and visit http://localhost:3000 to access the application.

Start the Backend :
cd backend
node server.js

Backend API Endpoints
Enroll: POST /api/enroll - Enroll a user in the yoga class.

Complete Payment: POST /api/completePayment - Mock endpoint to simulate processing payments.

Frontend :
The frontend is built using React. The main entry point is the AdmissionForm.js component, which handles user input, form submission, and communication with the backend.

Configuration:
The backend connects to MongoDB using the connection string in backend/index.js. Update it if your MongoDB instance is running on a different address or port.
CORS headers are configured in backend/index.js to allow all origins during development. Adjust the headers as needed for production.

Acknowledgments:
This project is a basic implementation and can be extended with additional features, security measures, and error handling based on specific requirements.