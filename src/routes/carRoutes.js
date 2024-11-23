import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import {
  addCar,
  getAllCar,
  getCarById,
  deleteCar,
  updateCar,

} from '../controllers/carController.js'

const router = express.Router();

//Falta aniadir los middlewares

router.post('/create',authMiddleware,addCar)
router.get('/',authMiddleware,getAllCar)
router.get('/car/:id',authMiddleware,getCarById) //por revisar (el carro si existe en la db pero el usar el endpoint indica que no se encontró)
router.put('/update/:id',authMiddleware,updateCar)
router.delete('/delete/:id',authMiddleware,deleteCar)


export default router;