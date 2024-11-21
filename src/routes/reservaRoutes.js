import express from 'express'
//import authMiddleware from '../middlewares/authMiddleware.js'


import {
  addReserva,
  getAllReservas,
  getReservaById,
  updateReserva,
  deleteReserva
} from '../controllers/reservaController.js'

const router = express.Router()

//Falta aniadir los middlewares
router.post('/create', addReserva)
router.get('/', getAllReservas)
router.get('/reserva/:id', getReservaById)
router.put('/update/:id', updateReserva)
router.delete('/delete/:id', deleteReserva)

export default router
