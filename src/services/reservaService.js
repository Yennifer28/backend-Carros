import ReservaRepository from '../repositories/reservaRepository.js'
import ReservaModel from '../models/reservaModel.js'
const reservaRepository = new ReservaRepository()

class ReservaService {


  async addReserva (data){
    const newReserva = new ReservaModel (
      null,
      data.fechainicio,
      data.ciudadinicio,
      data.fechafin,
      data.ciudadfin,
      data.idcar,
      data.idusuario,
      data.costo,
      data.nombre,
      data.telefono,
      data.direccion,
      data.ciudad
    )
    const rsvId = await reservaRepository.addReserva(newReserva);
    
    return rsvId
  }

  async getAllReservas(){
    return await reservaRepository.getAllReservas()
  }

  async getReservaById(id){
    return await reservaRepository.getReservaById(id)

  }

  async updateReserva (id,data){
    return await reservaRepository.updateReserva(id,data)

  }


  async deleteReserva(id) {
    return await reservaRepository.deleteReserva(id)
  }

}

export default ReservaService