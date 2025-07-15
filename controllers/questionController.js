const Question = require('../models/Question');
const { generateRandomQuestion } = require('../utils/generateQuestion');

// GET /api/questions
const getAllQuestions = async (req, res) => {
  const { language, level, type, limit = 10 } = req.query;
  const filter = {};

  if (language) filter.language = language;
  if (level) filter.level = parseInt(level);
  if (type) filter.type = type;

  try {
    const questions = await Question.find(filter).limit(parseInt(limit));
    res.json({
      success: true,
      count: questions.length,
      data: questions
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al obtener preguntas',
      error: error.message 
    });
  }
};

// GET /api/questions/random
const getRandomQuestion = async (req, res) => {
  const { language, level } = req.query;
  const filter = {};

  if (language) filter.language = language;
  if (level) filter.level = parseInt(level);

  try {
    const count = await Question.countDocuments(filter);
    if (count === 0) {
      // Si no hay preguntas en la BD, generar una aleatoria
      const randomQuestion = generateRandomQuestion();
      return res.json({
        success: true,
        data: randomQuestion,
        generated: true
      });
    }

    const random = Math.floor(Math.random() * count);
    const question = await Question.findOne(filter).skip(random);
    
    res.json({
      success: true,
      data: question,
      generated: false
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al obtener pregunta aleatoria',
      error: error.message 
    });
  }
};

// GET /api/questions/:id
const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ 
        success: false,
        message: 'Pregunta no encontrada' 
      });
    }
    res.json({
      success: true,
      data: question
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al buscar la pregunta',
      error: error.message 
    });
  }
};

// POST /api/questions
const createQuestion = async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    const saved = await newQuestion.save();
    res.status(201).json({
      success: true,
      data: saved
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error al crear pregunta', 
      error: error.message 
    });
  }
};

// DELETE /api/questions/:id
const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) {
      return res.status(404).json({ 
        success: false,
        message: 'Pregunta no encontrada' 
      });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al eliminar pregunta',
      error: error.message 
    });
  }
};

// PUT /api/questions/:id
const updateQuestion = async (req, res) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    
    if (!updatedQuestion) {
      return res.status(404).json({ 
        success: false,
        message: 'Pregunta no encontrada' 
      });
    }
    
    res.json({
      success: true,
      data: updatedQuestion
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error al actualizar pregunta',
      error: error.message 
    });
  }
};

module.exports = { 
  getAllQuestions, 
  getQuestionById, 
  createQuestion, 
  deleteQuestion, 
  updateQuestion,
  getRandomQuestion 
};
