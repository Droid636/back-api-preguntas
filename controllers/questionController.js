const Question = require('../models/Question');

// GET /api/questions
const getAllQuestions = async (req, res) => {
  const { language, level } = req.query;
  const filter = {};

  if (language) filter.language = language;
  if (level) filter.level = level;

  try {
    const questions = await Question.find(filter);
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener preguntas' });
  }
};

// GET /api/questions/:id
const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ message: 'Pregunta no encontrada' });
    res.json(question);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar la pregunta' });
  }
};

// POST /api/questions
const createQuestion = async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    const saved = await newQuestion.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear pregunta', error });
  }
};

// DELETE /api/questions/:id
const deleteQuestion = async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar pregunta' });
  }
};

// PUT /api/questions/:id
const updateQuestion = async (req, res) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar pregunta' });
  }
};

module.exports = { getAllQuestions, getQuestionById, createQuestion, deleteQuestion, updateQuestion };
