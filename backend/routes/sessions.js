const express = require('express');
const router = express.Router();


const sessionsController = require('../controllers/sessionsController');
const authMiddleware = require('../middleware/authMiddleware');

// Define routes
router.get('/',authMiddleware, sessionsController.getFreeSessions);
router.post('/book',authMiddleware, sessionsController.bookSession);

module.exports = router;
