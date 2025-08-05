const Introduction = require('../models/Introduction');

// GET /api/introductions
const getAllIntroductions = async (req, res) => {
  try {
    const introductions = await Introduction.find().sort({ language: 1 });
    res.json({
      success: true,
      count: introductions.length,
      data: introductions
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al obtener introducciones',
      error: error.message 
    });
  }
};

// GET /api/introductions/:language
const getIntroductionByLanguage = async (req, res) => {
  try {
    const introduction = await Introduction.findOne({ language: req.params.language });
    if (!introduction) {
      return res.status(404).json({ 
        success: false,
        message: 'Introducción no encontrada para este lenguaje' 
      });
    }
    res.json({
      success: true,
      data: introduction
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al obtener introducción',
      error: error.message 
    });
  }
};

// POST /api/introductions
const createIntroduction = async (req, res) => {
  try {
    const newIntroduction = new Introduction(req.body);
    const saved = await newIntroduction.save();
    res.status(201).json({
      success: true,
      data: saved
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error al crear introducción', 
      error: error.message 
    });
  }
};

// PUT /api/introductions/:language
const updateIntroduction = async (req, res) => {
  try {
    const updatedIntroduction = await Introduction.findOneAndUpdate(
      { language: req.params.language }, 
      req.body, 
      { new: true, runValidators: true }
    );
    
    if (!updatedIntroduction) {
      return res.status(404).json({ 
        success: false,
        message: 'Introducción no encontrada' 
      });
    }
    
    res.json({
      success: true,
      data: updatedIntroduction
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error al actualizar introducción',
      error: error.message 
    });
  }
};

// DELETE /api/introductions/:language
const deleteIntroduction = async (req, res) => {
  try {
    const introduction = await Introduction.findOneAndDelete({ language: req.params.language });
    if (!introduction) {
      return res.status(404).json({ 
        success: false,
        message: 'Introducción no encontrada' 
      });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al eliminar introducción',
      error: error.message 
    });
  }
};

// POST /api/introductions/seed - Poblar introducciones
const seedIntroductions = async (req, res) => {
  try {
    const introductions = [
      {
        language: 'css',
        title: 'Bienvenido a CSS',
        subtitle: 'El lenguaje de estilos web',
        description: 'CSS (Cascading Style Sheets) es el lenguaje de estilos utilizado para describir la presentación de documentos HTML. Con CSS puedes controlar el diseño, colores, fuentes y la disposición de elementos en una página web.',
        features: [
          'Control total sobre el diseño y presentación',
          'Separación de contenido y estilo',
          'Responsive design y media queries',
          'Animaciones y transiciones',
          'Flexbox y Grid para layouts modernos'
        ],
        examples: [
          {
            title: 'Estilo básico',
            description: 'Cambiar el color de fondo y texto',
            code: 'body {\n  background-color: #f0f0f0;\n  color: #333;\n  font-family: Arial, sans-serif;\n}'
          },
          {
            title: 'Flexbox',
            description: 'Crear un layout flexible',
            code: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}'
          }
        ],
        difficulty: 1,
        estimatedTime: '2-3 semanas',
        prerequisites: ['HTML básico'],
        icon: '🎨',
        color: '#1572b6'
      },
      {
        language: 'html5',
        title: 'Bienvenido a HTML5',
        subtitle: 'El lenguaje de marcado web',
        description: 'HTML5 es la quinta versión del lenguaje de marcado HTML. Es la base fundamental para crear páginas web, proporcionando la estructura y el contenido de los sitios web modernos.',
        features: [
          'Estructura semántica mejorada',
          'Elementos multimedia nativos',
          'Formularios avanzados',
          'Canvas para gráficos',
          'Almacenamiento local'
        ],
        examples: [
          {
            title: 'Estructura básica',
            description: 'Documento HTML5 completo',
            code: '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Mi página</title>\n</head>\n<body>\n  <h1>Hola mundo</h1>\n</body>\n</html>'
          },
          {
            title: 'Formulario',
            description: 'Formulario con validación HTML5',
            code: '<form>\n  <input type="email" required>\n  <input type="password" required>\n  <button type="submit">Enviar</button>\n</form>'
          }
        ],
        difficulty: 1,
        estimatedTime: '1-2 semanas',
        prerequisites: ['Ninguno'],
        icon: '📄',
        color: '#e34f26'
      },
      {
        language: 'javascript',
        title: 'Bienvenido a JavaScript',
        subtitle: 'El lenguaje de programación web',
        description: 'JavaScript es un lenguaje de programación interpretado que se ejecuta en el navegador. Es fundamental para crear aplicaciones web interactivas y dinámicas.',
        features: [
          'Programación orientada a objetos',
          'Manipulación del DOM',
          'Eventos y interactividad',
          'AJAX y APIs',
          'ES6+ con características modernas'
        ],
        examples: [
          {
            title: 'Función básica',
            description: 'Crear y usar una función',
            code: 'function saludar(nombre) {\n  return `Hola ${nombre}!`;\n}\n\nconsole.log(saludar("Mundo"));'
          },
          {
            title: 'Arrow Function',
            description: 'Sintaxis moderna de funciones',
            code: 'const multiplicar = (a, b) => a * b;\n\nconsole.log(multiplicar(5, 3));'
          }
        ],
        difficulty: 2,
        estimatedTime: '4-6 semanas',
        prerequisites: ['HTML básico'],
        icon: '⚡',
        color: '#f7df1e'
      },
      {
        language: 'react',
        title: 'Bienvenido a React',
        subtitle: 'La biblioteca de interfaces de usuario',
        description: 'React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario. Permite crear aplicaciones web complejas de manera eficiente y mantenible.',
        features: [
          'Componentes reutilizables',
          'Virtual DOM para rendimiento',
          'Estado y props',
          'Hooks para componentes funcionales',
          'Ecosistema rico de herramientas'
        ],
        examples: [
          {
            title: 'Componente básico',
            description: 'Crear un componente React',
            code: 'function Saludo({ nombre }) {\n  return <h1>Hola {nombre}!</h1>;\n}\n\nReactDOM.render(\n  <Saludo nombre="Mundo" />,\n  document.getElementById("root")\n);'
          },
          {
            title: 'Hook useState',
            description: 'Manejar estado en componentes funcionales',
            code: 'import { useState } from "react";\n\nfunction Contador() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Contador: {count}\n    </button>\n  );\n}'
          }
        ],
        difficulty: 3,
        estimatedTime: '6-8 semanas',
        prerequisites: ['JavaScript avanzado', 'HTML', 'CSS'],
        icon: '⚛️',
        color: '#61dafb'
      }
    ];

    // Limpiar introducciones existentes
    await Introduction.deleteMany({});
    console.log('Introducciones existentes eliminadas');

    // Insertar nuevas introducciones
    const result = await Introduction.insertMany(introductions);
    
    res.json({
      success: true,
      message: 'Base de datos poblada exitosamente',
      count: result.length,
      data: result
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al poblar la base de datos',
      error: error.message 
    });
  }
};

// GET /api/introductions/css
const getCSSIntroduction = async (req, res) => {
  try {
    const introduction = await Introduction.findOne({ language: 'css' });
    if (!introduction) {
      return res.status(404).json({ 
        success: false,
        message: 'Introducción de CSS no encontrada' 
      });
    }
    res.json({
      success: true,
      data: introduction
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al obtener introducción de CSS',
      error: error.message 
    });
  }
};

// GET /api/introductions/html5
const getHTMLIntroduction = async (req, res) => {
  try {
    const introduction = await Introduction.findOne({ language: 'html5' });
    if (!introduction) {
      return res.status(404).json({ 
        success: false,
        message: 'Introducción de HTML5 no encontrada' 
      });
    }
    res.json({
      success: true,
      data: introduction
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al obtener introducción de HTML5',
      error: error.message 
    });
  }
};

// GET /api/introductions/javascript
const getJavaScriptIntroduction = async (req, res) => {
  try {
    const introduction = await Introduction.findOne({ language: 'javascript' });
    if (!introduction) {
      return res.status(404).json({ 
        success: false,
        message: 'Introducción de JavaScript no encontrada' 
      });
    }
    res.json({
      success: true,
      data: introduction
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al obtener introducción de JavaScript',
      error: error.message 
    });
  }
};

// GET /api/introductions/react
const getReactIntroduction = async (req, res) => {
  try {
    const introduction = await Introduction.findOne({ language: 'react' });
    if (!introduction) {
      return res.status(404).json({ 
        success: false,
        message: 'Introducción de React no encontrada' 
      });
    }
    res.json({
      success: true,
      data: introduction
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error al obtener introducción de React',
      error: error.message 
    });
  }
};

module.exports = { 
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
}; 