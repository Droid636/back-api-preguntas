const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('../models/Question');
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

const seedDatabase = async () => {
  try {
    // Limpiar la base de datos
    await Question.deleteMany({});
    console.log('Base de datos limpiada');

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

    console.log('\nEstadísticas por lenguaje:');
    stats.forEach(stat => {
      console.log(`${stat._id}: ${stat.count} preguntas`);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
    process.exit(1);
  }
};

// Ejecutar el seeding
connectDB().then(seedDatabase); 