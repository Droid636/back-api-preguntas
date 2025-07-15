const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  language: { type: String, required: true },
  level: { type: Number, required: true },
  type: { type: String, enum: ['multiple_choice', 'fill_in_blank', 'open'], required: true },
  question: { type: String, required: true },
  options: [String],
  answer: { type: String, required: true },
  explanation: String
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);
