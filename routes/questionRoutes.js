const express = require('express');
const router = express.Router();
const {
  getAllQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getRandomQuestion,
  // Endpoints por lenguaje
  getCSSQuestions,
  getRandomCSSQuestion,
  getHTMLQuestions,
  getRandomHTMLQuestion,
  getJavaScriptQuestions,
  getRandomJavaScriptQuestion,
  getReactQuestions,
  getRandomReactQuestion,
  // Métodos CRUD por lenguaje
  createCSSQuestion,
  updateCSSQuestion,
  deleteCSSQuestion,
  createHTMLQuestion,
  updateHTMLQuestion,
  deleteHTMLQuestion,
  createJavaScriptQuestion,
  updateJavaScriptQuestion,
  deleteJavaScriptQuestion,
  createReactQuestion,
  updateReactQuestion,
  deleteReactQuestion
} = require('../controllers/questionController');
const authMiddleware = require('../middleware/authMiddleware');

// Rutas públicas - Generales
router.get('/', getAllQuestions);
router.get('/random', getRandomQuestion);

// Rutas por lenguaje específico - CSS
router.get('/css', getCSSQuestions);
router.get('/css/random', getRandomCSSQuestion);
router.post('/css', authMiddleware, createCSSQuestion);
router.put('/css/:id', authMiddleware, updateCSSQuestion);
router.delete('/css/:id', authMiddleware, deleteCSSQuestion);

// Rutas por lenguaje específico - HTML5
router.get('/html5', getHTMLQuestions);
router.get('/html5/random', getRandomHTMLQuestion);
router.post('/html5', authMiddleware, createHTMLQuestion);
router.put('/html5/:id', authMiddleware, updateHTMLQuestion);
router.delete('/html5/:id', authMiddleware, deleteHTMLQuestion);

// Rutas por lenguaje específico - JavaScript
router.get('/javascript', getJavaScriptQuestions);
router.get('/javascript/random', getRandomJavaScriptQuestion);
router.post('/javascript', authMiddleware, createJavaScriptQuestion);
router.put('/javascript/:id', authMiddleware, updateJavaScriptQuestion);
router.delete('/javascript/:id', authMiddleware, deleteJavaScriptQuestion);

// Rutas por lenguaje específico - React
router.get('/react', getReactQuestions);
router.get('/react/random', getRandomReactQuestion);
router.post('/react', authMiddleware, createReactQuestion);
router.put('/react/:id', authMiddleware, updateReactQuestion);
router.delete('/react/:id', authMiddleware, deleteReactQuestion);

// Ruta para obtener pregunta por ID (debe ir después de las rutas específicas)
router.get('/:id', getQuestionById);

// Rutas protegidas (requieren autenticación) - Generales
router.post('/', authMiddleware, createQuestion);
router.put('/:id', authMiddleware, updateQuestion);
router.delete('/:id', authMiddleware, deleteQuestion);

module.exports = router;
