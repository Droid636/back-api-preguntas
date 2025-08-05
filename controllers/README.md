# 📚 API de Preguntas - Documentación de Endpoints

Este documento describe todos los endpoints disponibles en el controlador de preguntas (`questionController.js`).

## 🚀 Endpoints Generales

### GET `/api/questions`
Obtiene todas las preguntas con filtros opcionales.

**Parámetros de consulta:**
- `language` (opcional): Filtrar por lenguaje (css, html5, javascript, react)
- `level` (opcional): Filtrar por nivel de dificultad (1, 2, 3)
- `type` (opcional): Filtrar por tipo de pregunta
- `limit` (opcional): Número máximo de resultados (default: 10)

**Ejemplo:**
```bash
GET /api/questions?language=css&level=2&limit=5
```

### GET `/api/questions/random`
Obtiene una pregunta aleatoria.

**Parámetros de consulta:**
- `language` (opcional): Filtrar por lenguaje
- `level` (opcional): Filtrar por nivel de dificultad

**Ejemplo:**
```bash
GET /api/questions/random?language=javascript&level=1
```

### GET `/api/questions/:id`
Obtiene una pregunta específica por ID.

**Ejemplo:**
```bash
GET /api/questions/64f1a2b3c4d5e6f7g8h9i0j1
```

### POST `/api/questions`
Crea una nueva pregunta (requiere autenticación).

**Body:**
```json
{
  "language": "css",
  "level": 2,
  "type": "multiple_choice",
  "question": "¿Qué hace display: flex?",
  "options": ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
  "answer": "Opción 1",
  "explanation": "Explicación detallada..."
}
```

### PUT `/api/questions/:id`
Actualiza una pregunta existente (requiere autenticación).

**Ejemplo:**
```bash
PUT /api/questions/64f1a2b3c4d5e6f7g8h9i0j1
{
  "question": "Pregunta actualizada",
  "level": 3
}
```

### DELETE `/api/questions/:id`
Elimina una pregunta (requiere autenticación).

**Ejemplo:**
```bash
DELETE /api/questions/64f1a2b3c4d5e6f7g8h9i0j1
```

## 🎨 Endpoints de CSS

### GET `/api/questions/css`
Obtiene todas las preguntas de CSS.

**Parámetros de consulta:**
- `level` (opcional): Filtrar por nivel (1, 2, 3)
- `limit` (opcional): Número máximo de resultados (default: 10)

**Ejemplo:**
```bash
GET /api/questions/css?level=2&limit=5
```

### GET `/api/questions/css/random`
Obtiene una pregunta aleatoria de CSS.

**Parámetros de consulta:**
- `level` (opcional): Filtrar por nivel

**Ejemplo:**
```bash
GET /api/questions/css/random?level=1
```

### POST `/api/questions/css`
Crea una nueva pregunta de CSS (requiere autenticación).

**Body:**
```json
{
  "level": 2,
  "type": "multiple_choice",
  "question": "¿Qué hace margin en CSS?",
  "options": ["Espacio interno", "Espacio externo", "Borde", "Color"],
  "answer": "Espacio externo",
  "explanation": "Margin define el espacio externo alrededor de un elemento."
}
```

### PUT `/api/questions/css/:id`
Actualiza una pregunta de CSS (requiere autenticación).

### DELETE `/api/questions/css/:id`
Elimina una pregunta de CSS (requiere autenticación).

## 📄 Endpoints de HTML5

### GET `/api/questions/html5`
Obtiene todas las preguntas de HTML5.

### GET `/api/questions/html5/random`
Obtiene una pregunta aleatoria de HTML5.

### POST `/api/questions/html5`
Crea una nueva pregunta de HTML5 (requiere autenticación).

### PUT `/api/questions/html5/:id`
Actualiza una pregunta de HTML5 (requiere autenticación).

### DELETE `/api/questions/html5/:id`
Elimina una pregunta de HTML5 (requiere autenticación).

## ⚡ Endpoints de JavaScript

### GET `/api/questions/javascript`
Obtiene todas las preguntas de JavaScript.

### GET `/api/questions/javascript/random`
Obtiene una pregunta aleatoria de JavaScript.

### POST `/api/questions/javascript`
Crea una nueva pregunta de JavaScript (requiere autenticación).

### PUT `/api/questions/javascript/:id`
Actualiza una pregunta de JavaScript (requiere autenticación).

### DELETE `/api/questions/javascript/:id`
Elimina una pregunta de JavaScript (requiere autenticación).

## ⚛️ Endpoints de React

### GET `/api/questions/react`
Obtiene todas las preguntas de React.

### GET `/api/questions/react/random`
Obtiene una pregunta aleatoria de React.

### POST `/api/questions/react`
Crea una nueva pregunta de React (requiere autenticación).

### PUT `/api/questions/react/:id`
Actualiza una pregunta de React (requiere autenticación).

### DELETE `/api/questions/react/:id`
Elimina una pregunta de React (requiere autenticación).

## 📋 Estructura de Respuesta

### Respuesta Exitosa
```json
{
  "success": true,
  "count": 1,
  "data": {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
    "language": "css",
    "level": 2,
    "type": "multiple_choice",
    "question": "¿Qué hace margin en CSS?",
    "options": ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
    "answer": "Opción 1",
    "explanation": "Explicación detallada...",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Respuesta de Error
```json
{
  "success": false,
  "message": "Error al obtener preguntas",
  "error": "Detalles del error"
}
```

## 🔐 Autenticación

Los endpoints que requieren autenticación necesitan incluir el token JWT en el header:

```
Authorization: Bearer <token>
```

## 🎯 Códigos de Estado HTTP

- `200` - OK (GET, PUT)
- `201` - Created (POST)
- `204` - No Content (DELETE)
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## 📝 Ejemplos de Uso

### Obtener 5 preguntas aleatorias de CSS nivel 2
```bash
curl -X GET "http://localhost:3000/api/questions/css/random?level=2&limit=5"
```

### Crear nueva pregunta de React
```bash
curl -X POST "http://localhost:3000/api/questions/react" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "level": 3,
    "type": "multiple_choice",
    "question": "¿Qué es un hook en React?",
    "options": ["Una función", "Un componente", "Un estado", "Una prop"],
    "answer": "Una función",
    "explanation": "Los hooks son funciones que permiten usar estado y otros features de React."
  }'
```

### Actualizar pregunta existente
```bash
curl -X PUT "http://localhost:3000/api/questions/css/64f1a2b3c4d5e6f7g8h9i0j1" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "question": "Pregunta actualizada",
    "level": 3
  }'
```

## 🔄 Fallback Inteligente

Si no hay preguntas en la base de datos para un lenguaje específico, el sistema generará automáticamente una pregunta usando las funciones de `utils/generateQuestion.js`.

## 📊 Estadísticas

- **Total de endpoints**: 28
- **Lenguajes soportados**: 4 (CSS, HTML5, JavaScript, React)
- **Métodos HTTP**: GET, POST, PUT, DELETE
- **Niveles de dificultad**: 3 (1, 2, 3)
- **Tipos de pregunta**: multiple_choice

---

**Última actualización**: Enero 2024
**Versión**: 1.0.0 