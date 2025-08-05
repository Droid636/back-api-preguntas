const mongoose = require('mongoose');

const introductionSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true,
    enum: ['css', 'html5', 'javascript', 'react'],
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: [{
    type: String
  }],
  examples: [{
    title: String,
    description: String,
    code: String
  }],
  difficulty: {
    type: Number,
    min: 1,
    max: 3,
    default: 1
  },
  estimatedTime: {
    type: String,
    default: '2-3 semanas'
  },
  prerequisites: [{
    type: String
  }],
  icon: {
    type: String,
    default: '🎨' // Emoji por defecto
  },
  color: {
    type: String,
    default: '#007acc'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Introduction', introductionSchema); 