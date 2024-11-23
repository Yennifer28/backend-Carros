import express from 'express';
import { check, validationResult } from 'express-validator';
import {
  createUsuario,
} from '../controllers/usuarioController.js';

const router = express.Router();

router.post(
  '/create',
  [
    check('nombre').notEmpty().withMessage('El nombre es obligatorio').isLength({ min: 4 }).withMessage('El nombre debe tener al menos 4 caracteres'),
    check('apellido').notEmpty().withMessage('El apellido es obligatorio').isLength({ min: 4 }).withMessage('El apellido debe tener al menos 4 caracteres'),
    check('correo').notEmpty().withMessage('El correo es obligatorio').isEmail().withMessage('El correo debe tener un formato valido'),
    check('contrasena').notEmpty().withMessage('La contrasena es obligatoria, min. 8 caracteres').isLength({min: 8})
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: true,
        message: 'Errores de validación',
        errors: errors.array(),
      });
    }
    await createUsuario(req, res);
  }
);

export default router;