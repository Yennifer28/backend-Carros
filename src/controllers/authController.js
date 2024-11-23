import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UsuarioService from '../services/usuarioService.js';

const usuarioService = new UsuarioService();

export const login = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    //llamamos al servicio directamente
    const user = await usuarioService.getUsuarioByCorreo(correo);

    if(!user){
      return res.status(401).json({
        error: true,
        message: 'Usuario no existe'
      });
    }

    //Si se encontro al usuario vemos si la contraseña es valida
    const isValid = await bcrypt.compare(contrasena, user.contrasena);

    if (!isValid){
      return res.status(401).json({
        error:true,
        message: 'La contrasena es incorrecta'
      });
    }

    //Si es valida la contra creamos el token
    const token = jwt.sign({
      userId: user.id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '2h'
    }
  );
  return res.json({ token });
  } catch(error){
    return res.status(500).json({
      error: true,
      message: 'Error ' + error.message
    });
  };
}

export const logout = (req, res) => {
  res.json({
    error: false,
    message: 'Sesion cerrada con exito'
  });
}