class UsuarioModel {
  constructor (id, nombre, apellido, correo, contrasena,rol){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.contrasena = contrasena;
    this.rol = rol;
  }
};

export default UsuarioModel;