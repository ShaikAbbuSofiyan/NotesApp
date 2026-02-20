const noteRoutes = require('../controllers/note.controller');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/note/create', authMiddleware.isUserValid,noteRoutes.createNote);
router.put('/note/edit/:id', authMiddleware.isUserValid,noteRoutes.editNote);
router.delete('/note/delete/:id', authMiddleware.isUserValid, noteRoutes.deleteNote);

module.exports = router;