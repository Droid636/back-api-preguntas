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

// GET /api/questions/css
const getCSSQuestions = async (req, res) => {
  const { level, limit = 10 } = req.query;
  const filter = { language: 'css' };

  if (level) filter.level = parseInt(level);

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
      message: 'Error al obtener preguntas de CSS',
      error: error.message 
    });
  }
};

// GET /api/questions/css/random
const getRandomCSSQuestion = async (req, res) => {
  const { level } = req.query;
  const filter = { language: 'css' };

  if (level) filter.level = parseInt(level);

  try {
    const count = await Question.countDocuments(filter);
    if (count === 0) {
      // Si no hay preguntas de CSS, generar una aleatoria
      const { generateCSSQuestion } = require('../utils/generateQuestion');
      const randomQuestion = generateCSSQuestion();
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
      message: 'Error al obtener pregunta aleatoria de CSS',
      error: error.message 
    });
  }
};

// GET /api/questions/html5
const getHTMLQuestions = async (req, res) => {
  const { level, limit = 10 } = req.query;
  const filter = { language: 'html5' };

  if (level) filter.level = parseInt(level);

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
      message: 'Error al obtener preguntas de HTML5',
      error: error.message 
    });
  }
};

// GET /api/questions/html5/random
const getRandomHTMLQuestion = async (req, res) => {
  const { level } = req.query;
  const filter = { language: 'html5' };

  if (level) filter.level = parseInt(level);

  try {
    const count = await Question.countDocuments(filter);
    if (count === 0) {
      // Si no hay preguntas de HTML5, generar una aleatoria
      const { generateHTMLQuestion } = require('../utils/generateQuestion');
      const randomQuestion = generateHTMLQuestion();
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
      message: 'Error al obtener pregunta aleatoria de HTML5',
      error: error.message 
    });
  }
};

// GET /api/questions/javascript
const getJavaScriptQuestions = async (req, res) => {
  const { level, limit = 10 } = req.query;
  const filter = { language: 'javascript' };

  if (level) filter.level = parseInt(level);

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
      message: 'Error al obtener preguntas de JavaScript',
      error: error.message 
    });
  }
};

// GET /api/questions/javascript/random
const getRandomJavaScriptQuestion = async (req, res) => {
  const { level } = req.query;
  const filter = { language: 'javascript' };

  if (level) filter.level = parseInt(level);

  try {
    const count = await Question.countDocuments(filter);
    if (count === 0) {
      // Si no hay preguntas de JavaScript, generar una aleatoria
      const { generateJSQuestion } = require('../utils/generateQuestion');
      const randomQuestion = generateJSQuestion();
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
      message: 'Error al obtener pregunta aleatoria de JavaScript',
      error: error.message 
    });
  }
};

// GET /api/questions/react
const getReactQuestions = async (req, res) => {
  const { level, limit = 10 } = req.query;
  const filter = { language: 'react' };

  if (level) filter.level = parseInt(level);

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
      message: 'Error al obtener preguntas de React',
      error: error.message 
    });
  }
};

// GET /api/questions/react/random
const getRandomReactQuestion = async (req, res) => {
  const { level } = req.query;
  const filter = { language: 'react' };

  if (level) filter.level = parseInt(level);

  try {
    const count = await Question.countDocuments(filter);
    if (count === 0) {
      // Si no hay preguntas de React, generar una aleatoria
      const { generateReactQuestion } = require('../utils/generateQuestion');
      const randomQuestion = generateReactQuestion();
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
      message: 'Error al obtener pregunta aleatoria de React',
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

// POST /api/questions/css
const createCSSQuestion = async (req, res) => {
  try {
    const questionData = { ...req.body, language: 'css' };
    const newQuestion = new Question(questionData);
    const saved = await newQuestion.save();
    res.status(201).json({
      success: true,
      data: saved
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error al crear pregunta de CSS', 
      error: error.message 
    });
  }
};

// PUT /api/questions/css/:id
const updateCSSQuestion = async (req, res) => {
  try {
    const updatedQuestion = await Question.findOneAndUpdate(
      { _id: req.params.id, language: 'css' }, 
      req.body, 
      { new: true, runValidators: true }
    );
    
    if (!updatedQuestion) {
      return res.status(404).json({ 
        success: false,
        message: 'Pregunta de CSS no encontrada' 
      });
    }
    
    res.json({
      success: true,
      data: updatedQuestion
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error al actualizar pregunta de CSS',
      error: error.message 
    });
  }
};

// DELETE /api/questions/css/:id
const deleteCSSQuestion = async (req, res) => {
  try {
    const question = await Question.findOneAndDelete({ _id: req.params.id, language: 'css' });
    if (!question) {
      return res.status(404).json({ 
        success: false,
        message: 'Pregunta de CSS no encontrada' 
      });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al eliminar pregunta de CSS',
      error: error.message 
    });
  }
};

// POST /api/questions/html5
const createHTMLQuestion = async (req, res) => {
  try {
    const questionData = { ...req.body, language: 'html5' };
    const newQuestion = new Question(questionData);
    const saved = await newQuestion.save();
    res.status(201).json({
      success: true,
      data: saved
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error al crear pregunta de HTML5', 
      error: error.message 
    });
  }
};

// PUT /api/questions/html5/:id
const updateHTMLQuestion = async (req, res) => {
  try {
    const updatedQuestion = await Question.findOneAndUpdate(
      { _id: req.params.id, language: 'html5' }, 
      req.body, 
      { new: true, runValidators: true }
    );
    
    if (!updatedQuestion) {
      return res.status(404).json({ 
        success: false,
        message: 'Pregunta de HTML5 no encontrada' 
      });
    }
    
    res.json({
      success: true,
      data: updatedQuestion
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error al actualizar pregunta de HTML5',
      error: error.message 
    });
  }
};

// DELETE /api/questions/html5/:id
const deleteHTMLQuestion = async (req, res) => {
  try {
    const question = await Question.findOneAndDelete({ _id: req.params.id, language: 'html5' });
    if (!question) {
      return res.status(404).json({ 
        success: false,
        message: 'Pregunta de HTML5 no encontrada' 
      });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al eliminar pregunta de HTML5',
      error: error.message 
    });
  }
};

// POST /api/questions/javascript
const createJavaScriptQuestion = async (req, res) => {
  try {
    const questionData = { ...req.body, language: 'javascript' };
    const newQuestion = new Question(questionData);
    const saved = await newQuestion.save();
    res.status(201).json({
      success: true,
      data: saved
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error al crear pregunta de JavaScript', 
      error: error.message 
    });
  }
};

// PUT /api/questions/javascript/:id
const updateJavaScriptQuestion = async (req, res) => {
  try {
    const updatedQuestion = await Question.findOneAndUpdate(
      { _id: req.params.id, language: 'javascript' }, 
      req.body, 
      { new: true, runValidators: true }
    );
    
    if (!updatedQuestion) {
      return res.status(404).json({ 
        success: false,
        message: 'Pregunta de JavaScript no encontrada' 
      });
    }
    
    res.json({
      success: true,
      data: updatedQuestion
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error al actualizar pregunta de JavaScript',
      error: error.message 
    });
  }
};

// DELETE /api/questions/javascript/:id
const deleteJavaScriptQuestion = async (req, res) => {
  try {
    const question = await Question.findOneAndDelete({ _id: req.params.id, language: 'javascript' });
    if (!question) {
      return res.status(404).json({ 
        success: false,
        message: 'Pregunta de JavaScript no encontrada' 
      });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al eliminar pregunta de JavaScript',
      error: error.message 
    });
  }
};

// POST /api/questions/react
const createReactQuestion = async (req, res) => {
  try {
    const questionData = { ...req.body, language: 'react' };
    const newQuestion = new Question(questionData);
    const saved = await newQuestion.save();
    res.status(201).json({
      success: true,
      data: saved
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error al crear pregunta de React', 
      error: error.message 
    });
  }
};

// PUT /api/questions/react/:id
const updateReactQuestion = async (req, res) => {
  try {
    const updatedQuestion = await Question.findOneAndUpdate(
      { _id: req.params.id, language: 'react' }, 
      req.body, 
      { new: true, runValidators: true }
    );
    
    if (!updatedQuestion) {
      return res.status(404).json({ 
        success: false,
        message: 'Pregunta de React no encontrada' 
      });
    }
    
    res.json({
      success: true,
      data: updatedQuestion
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error al actualizar pregunta de React',
      error: error.message 
    });
  }
};

// DELETE /api/questions/react/:id
const deleteReactQuestion = async (req, res) => {
  try {
    const question = await Question.findOneAndDelete({ _id: req.params.id, language: 'react' });
    if (!question) {
      return res.status(404).json({ 
        success: false,
        message: 'Pregunta de React no encontrada' 
      });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al eliminar pregunta de React',
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
};
