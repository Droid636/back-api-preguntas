const express = require('express');
const router = express.Router();
const {
  getAllIntroductions,
  getIntroductionByLanguage,
  createIntroduction,
  updateIntroduction,
  deleteIntroduction,
  seedIntroductions,
  getCSSIntroduction,
  getHTMLIntroduction,
  getJavaScriptIntroduction,
  getReactIntroduction
} = require('../controllers/introductionController');
const authMiddleware = require('../middleware/authMiddleware');

// Rutas públicas - Generales
router.get('/', getAllIntroductions);
router.get('/:language', getIntroductionByLanguage);

// Rutas específicas por lenguaje
router.get('/css', getCSSIntroduction);
router.get('/html5', getHTMLIntroduction);
router.get('/javascript', getJavaScriptIntroduction);
router.get('/react', getReactIntroduction);

// Ruta para poblar datos (pública para facilitar el desarrollo)
router.post('/seed', seedIntroductions);

// Rutas protegidas (requieren autenticación)
router.post('/', authMiddleware, createIntroduction);
router.put('/:language', authMiddleware, updateIntroduction);
router.delete('/:language', authMiddleware, deleteIntroduction);

module.exports = router; 