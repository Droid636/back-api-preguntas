const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('../models/Question');
const Introduction = require('../models/Introduction');
const fs = require('fs');
const path = require('path');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB conectado para seeding');
  } catch (error) {
    console.error('Error al conectar a MongoDB', error);
    process.exit(1);
  }
};

const seedIntroductions = async () => {
  try {
    console.log('\n🌱 Poblando introducciones...');
    
    // Limpiar introducciones existentes
    await Introduction.deleteMany({});
    console.log('Introducciones existentes eliminadas');

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

    // Insertar nuevas introducciones
    const result = await Introduction.insertMany(introductions);
    console.log(`${result.length} introducciones insertadas:`);
    
    result.forEach(intro => {
      console.log(`  - ${intro.language.toUpperCase()}: ${intro.title}`);
    });

    console.log('✅ Introducciones pobladas exitosamente');
  } catch (error) {
    console.error('❌ Error al poblar introducciones:', error);
    throw error;
  }
};

const seedQuestions = async () => {
  try {
    console.log('\n📝 Poblando preguntas...');
    
    // Limpiar la base de datos
    await Question.deleteMany({});
    console.log('Preguntas existentes eliminadas');

    // Leer el archivo de preguntas de ejemplo
    const questionsPath = path.join(__dirname, '../data/preguntasEjemplo.json');
    const questionsData = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));

    // Insertar las preguntas
    const questions = await Question.insertMany(questionsData);
    console.log(`${questions.length} preguntas insertadas exitosamente`);

    // Mostrar estadísticas
    const stats = await Question.aggregate([
      {
        $group: {
          _id: '$language',
          count: { $sum: 1 }
        }
      }
    ]);

    console.log('\n📊 Estadísticas por lenguaje:');
    stats.forEach(stat => {
      console.log(`  - ${stat._id}: ${stat.count} preguntas`);
    });

    console.log('✅ Preguntas pobladas exitosamente');
  } catch (error) {
    console.error('❌ Error al poblar preguntas:', error);
    throw error;
  }
};

const seedDatabase = async () => {
  try {
    console.log('🚀 Iniciando proceso de seeding...');
    
    // Poblar introducciones
    await seedIntroductions();
    
    // Poblar preguntas
    await seedQuestions();
    
    console.log('\n🎉 ¡Base de datos poblada completamente!');
    console.log('📋 Resumen:');
    console.log('  - 4 introducciones (CSS, HTML5, JavaScript, React)');
    console.log('  - Preguntas de ejemplo cargadas desde data/preguntasEjemplo.json');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error durante el seeding:', error);
    process.exit(1);
  }
};

// Ejecutar el seeding
connectDB().then(seedDatabase); 