import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import path from 'path';
import UsuarioRepository from '../repositories/usuarioRepository.js';
import UsuarioModel from '../models/usuarioModel.js';

const usuarioRepository = new UsuarioRepository();
const secret = process.env.JWT_SECRET
//cantidad de saltos para encriptar contraseña
const saltRound = 10;

class UsuarioService {
  async createUsuario(data){
    const existUsuario = await usuarioRepository.getUsuarioByCorreo(data.correo)
    if(existUsuario){
      throw new Error('El usuario ya existe');
    }
    const hashedPass = await bcrypt.hash(data.contrasena, saltRound);

    const newUsuario = new UsuarioModel(
      null,
      data.nombre,
      data.apellido,
      data.correo,
      hashedPass
    )
    const usuarioID = await usuarioRepository.createUsuario(newUsuario);
    return usuarioID;
  }

  async getUsuarioByCorreo(correo){
    return await usuarioRepository.getUsuarioByCorreo(correo);
  }
}

export default UsuarioService;