const express = require('express');
const router = express.Router();
const {
  getAllQuestions,
  getQuestionById,
  createQuestion
} = require('../controllers/questionController');

router.get('/', getAllQuestions);
router.get('/:id', getQuestionById);
router.post('/', createQuestion);

module.exports = router;
