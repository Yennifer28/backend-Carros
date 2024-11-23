import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer', '').trim();
  if(!token){
    return res.status(401).json({
      message: 'No token provided'
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //si no funciona probar con req.correo
    req.user = decoded;
    next();
  } catch (error){
    return res.status(401).json({
      message: 'Invalid token'
    });
  }
}

export default authMiddleware;