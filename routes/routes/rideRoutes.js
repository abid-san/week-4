const express = require('express');
const router = express.Router();
const rideController = require('../controllers/rideController');
const authMiddleware = require('../middleware/authMiddleware');

// Apply authentication middleware to protected routes
router.use(authMiddleware.authenticate);

// POST /api/rides - Book new ride
router.post('/', rideController.bookRide);

// DELETE /api/rides/:id - Cancel ride
router.delete('/:id', rideController.cancelRide);

module.exports = router;
