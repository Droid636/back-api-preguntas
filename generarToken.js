const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { usuario: 'prueba', rol: 'admin' }, // payload de ejemplo
  'Clave123',                    // reemplaza por el valor de JWT_SECRET de tu .env
  { expiresIn: '2h' }
);

console.log(token);