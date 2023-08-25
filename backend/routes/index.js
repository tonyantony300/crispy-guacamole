const express = require('express');
const router = express.Router();

// Import other route files
const sessionsRouter = require('./sessions');
const authRouter = require('./auth');

router.use('/sessions', sessionsRouter);
router.use('/auth', authRouter);

module.exports = router;
