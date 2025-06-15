const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /api/users - Register new user
router.post('/', userController.registerUser);

module.exports = router;
