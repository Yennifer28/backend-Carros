import { Router } from "express";
import usuarioRoutes from './usuarioRoutes.js';
import carRoutes from './carRoutes.js'
import favoritesRoutes from './favoritesRoutes.js'
import reservaRoutes from './reservaRoutes.js'
import reviewRoutes from './reviewRoutes.js'
import authRoutes from './authRoutes.js';

const router = Router();

//en app usamos una ruta base
router.use('/usuarios', usuarioRoutes);
router.use('/cars',carRoutes)
router.use('/reviews',reviewRoutes)
router.use('/reserva',reservaRoutes)
router.use('/favorites',favoritesRoutes)
router.use('/auth', authRoutes);

export default router;