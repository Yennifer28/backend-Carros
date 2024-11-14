import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import path from 'path';
import UsuarioRepository from '../repositories/usuarioRepository.js';
import UsuarioModel from '../models/usuarioModel.js';

const empleadoRepository = new UsuarioRepository();
const secret = process.env.JWT_SECRET
//cantidad de saltos para encriptar contraseña
const saltRound = 10;