import { request, response } from 'express'
import ReservaService from '../services/reservaService.js'

const reservaService = new ReservaService()

const addReserva = async (request, response) => {
  try {
    const reservaId = await reservaService.addReserva(request.body)
    return response.status(200).json({ success: true, reservaId })
  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const getAllReservas = async (request, response) => {
  try {
    const reservas = await reservaService.getAllReservas()
    return response.status(200).json({ success: true, reservas })
  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const getReservaById = async (request, response) => {
  try {
    const id = request.params.id
    const reserva = await reservaService.getReservaById(id)

    if (!reserva) {
      return response.status(404).json({
        success: false,
        message: 'Reserva Not Found'
      })
    } else {
      return response.status(200).json({ success: true, reserva })
    }

  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const updateReserva = async (request, response) => {
  try {
    const id = request.params.id
    await reservaService.updateReserva(id, request.body)
    return response.status(200).json({ success: true })
  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const deleteReserva = async (request, response) => {
  try {
    const id = request.params.id
    await reservaService.deleteReserva(id)
    return response.status(200).json({ success: true })
  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error.message
    })
  }
}

export { addReserva, getAllReservas, getReservaById, updateReserva, deleteReserva }
