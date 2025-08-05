const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const questionRoutes = require('./routes/questionRoutes');
const introductionRoutes = require('./routes/introductionRoutes');

dotenv.config();
const connectDB = require('./config/db');
connectDB();

const app = express();

// Configuración de rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // máximo 100 requests por ventana
});

// Middleware de seguridad
app.use(helmet());
app.use(cors());
app.use(limiter);

// Middleware para JSON
app.use(express.json());

// Middleware para logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

// Rutas
app.use('/api/questions', questionRoutes);
app.use('/api/introductions', introductionRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: '🚀:::API de Preguntas funcionando correctamente:::🚀' });
});

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

// Middleware para rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
