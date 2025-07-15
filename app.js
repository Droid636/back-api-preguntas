const express = require('express');
const dotenv = require('dotenv');
const questionRoutes = require('./routes/questionRoutes');

dotenv.config();
const connectDB = require('./config/db');
connectDB();

const app = express();

// Middleware para JSON
app.use(express.json());

// Rutas
app.use('/api/questions', questionRoutes);

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
