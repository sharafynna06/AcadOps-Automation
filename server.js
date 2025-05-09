// server.js

const express = require('express');
const connectDB = require('./Database/conn'); // Import your DB connection file
const dotenv = require('dotenv');
dotenv.config(); // Make sure to load environment variables

// Initialize express app
const app = express();

// Middleware for handling JSON requests
app.use(express.json());



// Connect to the MongoDB database
connectDB();

// Example route to test server is working
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Server port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
