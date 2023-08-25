const express = require('express');
const router = express.Router();

// Import the auth controller
const authController = require('../controllers/authController');

// Define routes
router.post('/student', authController.studentLogin);
router.post('/dean', authController.deanLogin);

module.exports = router;
