# API de Preguntas para React Native

Una API RESTful para gestionar preguntas de programación diseñada para aplicaciones React Native.

## 🚀 Características

- ✅ CRUD completo para preguntas
- ✅ Filtrado por lenguaje, nivel y tipo
- ✅ Preguntas aleatorias
- ✅ Autenticación JWT
- ✅ Rate limiting
- ✅ Middleware de seguridad
- ✅ Validación de datos
- ✅ Respuestas estandarizadas

## 📋 Requisitos

- Node.js (v14 o superior)
- MongoDB
- npm o yarn

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone <tu-repositorio>
cd back-native
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```

Edita el archivo `.env` con tus configuraciones:
```env
MONGO_URI=mongodb://localhost:27017/questions_api
PORT=5000
JWT_SECRET=tu_super_secreto_jwt_aqui
```

4. **Poblar la base de datos**
```bash
npm run seed
```

5. **Iniciar el servidor**
```bash
# Desarrollo
npm run dev

# Producción
npm start
```

## 📚 Endpoints de la API

### Preguntas

#### GET /api/questions
Obtiene todas las preguntas con filtros opcionales.

**Query Parameters:**
- `language` (string): Filtrar por lenguaje (ej: "javascript", "html5")
- `level` (number): Filtrar por nivel de dificultad (1-5)
- `type` (string): Filtrar por tipo ("multiple_choice", "fill_in_blank", "open")
- `limit` (number): Limitar número de resultados (default: 10)

**Ejemplo:**
```bash
GET /api/questions?language=javascript&level=1&limit=5
```

#### GET /api/questions/random
Obtiene una pregunta aleatoria.

**Query Parameters:**
- `language` (string): Filtrar por lenguaje
- `level` (number): Filtrar por nivel

**Ejemplo:**
```bash
GET /api/questions/random?language=javascript&level=1
```

#### GET /api/questions/:id
Obtiene una pregunta específica por ID.

#### POST /api/questions
Crea una nueva pregunta (requiere autenticación).

**Headers:**
```
Authorization: Bearer <tu_token_jwt>
```

**Body:**
```json
{
  "language": "javascript",
  "level": 1,
  "type": "multiple_choice",
  "question": "¿Qué es JavaScript?",
  "options": ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
  "answer": "Opción 1",
  "explanation": "Explicación de la respuesta"
}
```

#### PUT /api/questions/:id
Actualiza una pregunta existente (requiere autenticación).

#### DELETE /api/questions/:id
Elimina una pregunta (requiere autenticación).

## 🔐 Autenticación

La API utiliza JWT para la autenticación. Para las rutas protegidas, incluye el token en el header:

```
Authorization: Bearer <tu_token_jwt>
```

## 📊 Estructura de Respuesta

Todas las respuestas siguen este formato:

```json
{
  "success": true,
  "data": {...},
  "count": 1,
  "message": "Mensaje opcional"
}
```

## 🗄️ Modelo de Datos

### Question Schema
```javascript
{
  language: String (required),
  level: Number (required, 1-5),
  type: String (required, enum: ['multiple_choice', 'fill_in_blank', 'open']),
  question: String (required),
  options: [String] (para multiple_choice),
  answer: String (required),
  explanation: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🛡️ Seguridad

- **Helmet**: Headers de seguridad
- **CORS**: Configuración de origen cruzado
- **Rate Limiting**: Límite de 100 requests por 15 minutos
- **JWT**: Autenticación segura
- **Validación**: Validación de datos con Mongoose

## 🧪 Testing

Para probar la API, puedes usar herramientas como:
- Postman
- Insomnia
- curl
- Thunder Client (VS Code)

## 📝 Scripts Disponibles

- `npm start`: Inicia el servidor en producción
- `npm run dev`: Inicia el servidor en desarrollo con nodemon
- `npm run seed`: Pobla la base de datos con datos de ejemplo

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 🆘 Soporte

Si tienes problemas o preguntas, abre un issue en el repositorio. 