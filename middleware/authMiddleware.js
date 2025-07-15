
const authMiddleware = (req, res, next) => {
    // Validar token aquí
    next();
  };
  
  module.exports = authMiddleware;
  