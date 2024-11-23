import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'


import {
  addReserva,
  getAllReservas,
  getReservaById,
  updateReserva,
  deleteReserva
} from '../controllers/reservaController.js'

const router = express.Router()

//Falta aniadir los middlewares
router.post('/create',authMiddleware,addReserva)
router.get('/', authMiddleware,getAllReservas)
router.get('/reserva/:id', authMiddleware,getReservaById)
router.put('/update/:id', authMiddleware,updateReserva)
router.delete('/delete/:id', authMiddleware,deleteReserva)

export default router