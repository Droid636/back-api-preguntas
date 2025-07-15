
function generateJSQuestion() {
  return {
    language: 'javascript',
    level: 1,
    type: 'multiple_choice',
    question: '¿Qué es JavaScript?',
    options: [
      'Un lenguaje de programación interpretado',
      'Un lenguaje de marcado',
      'Un lenguaje de estilos',
      'Un framework de React'
    ],
    answer: 'Un lenguaje de programación interpretado',
    explanation: 'JavaScript es un lenguaje de programación interpretado que se ejecuta en el navegador.'
  };
}

function generateHTMLQuestion() {
  return {
    language: 'html5',
    level: 1,
    type: 'multiple_choice',
    question: '¿Qué es HTML5?',
    options: [
      'Lenguaje de marcado para la creación de páginas web',
      'Lenguaje de programación para la creación de páginas web',
      'Lenguaje de estilos para la creación de páginas web',
      'Lenguaje de programación para la creación de aplicaciones móviles'
    ],
    answer: 'Lenguaje de marcado para la creación de páginas web',
    explanation: 'HTML5 es un lenguaje de marcado para la creación de páginas web. Es la quinta versión del lenguaje de marcado HTML.'
  };
}

function generateCSSQuestion() {
  return {
    language: 'css',
    level: 1,
    type: 'multiple_choice',
    question: '¿Qué es CSS?',
    options: [
      'Lenguaje de estilos para la creación de páginas web',
      'Lenguaje de programación para la creación de páginas web',
      'Lenguaje de marcado para la creación de páginas web',
      'Lenguaje de programación para la creación de aplicaciones móviles'
    ],
    answer: 'Lenguaje de estilos para la creación de páginas web',
    explanation: 'CSS es un lenguaje de estilos para la creación de páginas web.'
  };
}

function generateReactQuestion() {
  return {
    language: 'react',
    level: 1,
    type: 'multiple_choice',
    question: '¿Qué es React?',
    options: [
      'Una biblioteca de JavaScript para construir interfaces de usuario',
      'Un framework de JavaScript',
      'Un lenguaje de programación',
      'Un sistema de gestión de bases de datos'
    ],
    answer: 'Una biblioteca de JavaScript para construir interfaces de usuario',
    explanation: 'React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario.'
  };
}

function generateRandomQuestion() {
  const generators = [
    generateJSQuestion,
    generateHTMLQuestion,
    generateCSSQuestion,
    generateReactQuestion
  ];
  
  const randomGenerator = generators[Math.floor(Math.random() * generators.length)];
  return randomGenerator();
}

module.exports = { 
  generateJSQuestion, 
  generateHTMLQuestion, 
  generateCSSQuestion, 
  generateReactQuestion,
  generateRandomQuestion 
};
  