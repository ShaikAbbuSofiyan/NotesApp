const authRoutes = require('../controllers/auth.controller');
const express = require('express');

const router = express.Router();

router.post('/user/register', authRoutes.registerUser);
router.post('/user/login', authRoutes.loginUser);
router.get('/user/logout', authRoutes.logoutUser);

module.exports = router;