import UsuarioService from '../services/usuarioService.js';
import { validationResult } from 'express-validator';

const usuarioService = new UsuarioService();

const handleValidationErrors = (req, res, next) => {
  //Se evalúa lo que llega en el request
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(400).json({
      errors: errors.array()
    });
  }
  next();
}

//recibimos el request y de aquí pasará al servicio
const createUsuario = async (req, res) => {
  handleValidationErrors(req);
  try {
    const userId = await usuarioService.createUsuario(req.body);
    res.status(201).json({
      success: true,
      userId
    });
  } catch (error){
    res.status(400).json({
      success: false,
      message: error.message
    });
  };
};

const getUsuarioByCorreo = async (req, res) => {
  handleValidationErrors(req);

  try{
    const correo = req.params.correo;
    const usuario = usuarioService.getUsuarioByCorreo(correo);
    if(!usuario){
      res.status(404).json({
        success: false,
        message: 'Empleado no encontrado'
      });
    }
    res.status(201).json({
      success:true,
      usuario
    });
  } catch (error){
    res.status(400).json({
      success:false,
      message: error.message
    });
  };
};

export {
  createUsuario,
  getUsuarioByCorreo
};
