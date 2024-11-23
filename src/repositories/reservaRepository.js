import {db} from '../config/firebase.js'
import ReservaModel from '../models/reservaModel.js'

class ReservaRepository {
  async addReserva(data) {
    const reserva = await db.collection('reservas').add({
      fechainicio: data.fechainicio,
      ciudadinicio: data.ciudadinicio,
      fechafin: data.fechafin,
      ciudadfin: data.ciudadfin,
      idcar: data.idcar,
      idusuario: data.idusuario,
      costo: data.costo,
      nombre: data.nombre,
      telefono: data.telefono,
      direccion: data.direccion,
      ciudad: data.ciudad
    })
    return reserva.id
  }

  async getAllReservas() {
    const docs = await db.collection('reservas').get()
    const reservas = []
    docs.forEach((doc) => {
      const data = doc.data()
      reservas.push(new ReservaModel(
        doc.id,
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
      ))
    })
    return reservas
  }

  async getReservaById(id) {
    const doc = await db.collection('reservas').doc(id).get()
    if (!doc.exists) {
      return null
    }
    const data = doc.data()
    return new ReservaModel(
      doc.id,
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
  }

  async updateReserva(id, data) {
    await db.collection('reservas').doc(id).update(data)
  }

  async deleteReserva(id) {
    await db.collection('reservas').doc(id).delete()
  }
}

export default ReservaRepository