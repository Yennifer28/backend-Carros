import {db} from '../config/firebase.js';
import UsuarioModel from '../models/usuarioModel.js';

class UsuarioRepository {
  async createUsuario(data){
    const usuario = await db.collection('usuarios').add({
      nombre:data.nombre,
      apellido:data.apellido,
      correo:data.correo,
      contrasena:data.contrasena,
      rol : data.rol
    })
    return usuario.id;
  }

  async getUsuarioByCorreo(correo){
    const usuario = await db.collection('usuarios').where('correo', '==', correo).get();

    if (usuario.empty){
      return null;
    }

    const doc = usuario.docs[0];
    const data = doc.data();
    return new UsuarioModel(
      doc.id,
      data.nombre,
      data.apellido,
      data.correo,
      data.contrasena,
      data.rol
    )
  }
}

export default UsuarioRepository;