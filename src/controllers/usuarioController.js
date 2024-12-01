import UsuarioService from '../services/usuarioService.js';
const usuarioService = new UsuarioService();

//recibimos el request y de aquí pasará al servicio
const createUsuario = async (req, res) => {
  try {
    const userId = await usuarioService.createUsuario(req.body);
    return res.status(201).json({
      success: true,
      userId
    });
  } catch (error){
    return res.status(400).json({
      success: false,
      message: error.message
    });
  };
};

const getUsuarioByCorreo = async (req, res) => {
  try{
    const correo = req.params.correo;
    //añadimos el await para la gunción asincrona
    const usuario = await usuarioService.getUsuarioByCorreo(correo);
    if(!usuario){
      return res.status(404).json({
        success: false,
        message: 'Empleado no encontrado'
      });
    }
    return res.status(201).json({
      success:true,
      usuario
    });
  } catch (error){
    return res.status(400).json({
      success:false,
      message: error.message
    });
  };
};

const getAllUsers = async (request,response) =>{
  try {
    const usuarios = await usuarioService.getAllUsers();
    return response.status(200).json({success : true , usuarios})
}catch (error) {
      return response.status(400).json({
          success:false,
          message: error.message

      })
    }
}

export {
  createUsuario,
  getUsuarioByCorreo,
  getAllUsers
};
