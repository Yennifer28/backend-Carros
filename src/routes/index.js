import { Router } from "express";
import usuarioRoutes from './usuarioRoutes.js';
import authRoutes from './authRoutes.js';

const routes = Router();

//en app usamos una ruta base
routes.use('/usuarios', usuarioRoutes);
routes.use('/auth', authRoutes);

export default routes;