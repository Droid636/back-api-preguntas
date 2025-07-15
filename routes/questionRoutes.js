const express = require('express');
const router = express.Router();
const {
  getAllQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getRandomQuestion
} = require('../controllers/questionController');
const authMiddleware = require('../middleware/authMiddleware');

// Rutas públicas
router.get('/', getAllQuestions);
router.get('/random', getRandomQuestion);
router.get('/:id', getQuestionById);

// Rutas protegidas (requieren autenticación)
router.post('/', authMiddleware, createQuestion);
router.put('/:id', authMiddleware, updateQuestion);
router.delete('/:id', authMiddleware, deleteQuestion);

module.exports = router;
