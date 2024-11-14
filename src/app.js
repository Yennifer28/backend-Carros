import express from 'express';
import dotenv from 'dotenv';
import usuarioRoutes from './routes/usuarioRoutes.js';
import authMiddleware from './middlewares/authMiddleware.js';
import errorHandler from './middlewares/errorHandler.js';
import rateLimitMiddleware from './middlewares/rateLimit.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(rateLimitMiddleware);
app.use('/api/usuarios', usuarioRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3020;

app.listen(PORT, () => {
  console.log(`Servidor Trabajando 🚀: ${PORT}`);
});