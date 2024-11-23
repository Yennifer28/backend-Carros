import { Router } from "express";
import { login, logout } from '../controllers/authController.js';
import { check } from "express-validator";

const router = Router();

router.post(
  '/login',
  [
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('contrasena', 'La contrasena es obligatorio').not().isEmpty()
  ],
  login
)

router.post('/logout', logout);
export default router;