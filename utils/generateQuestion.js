
function generateJSQuestion() {
    return {
      language: 'JavaScript',
      level: 1,
      type: 'multiple_choice',
      question: '¿Cuál es el resultado de 2 + "2" en JavaScript?',
      options: ['22', '4', 'NaN', 'Error'],
      answer: '22',
      explanation: 'El operador + concatena cuando uno de los operandos es string.'
    };
  }
  
  module.exports = { generateJSQuestion };
  