import express from 'express'
//import authMiddleware from '../middlewares/authMiddleware.js'
import {
  addCar,
  getAllCar,
  getCarById,
  deleteCar,
  updateCar,

} from '../controllers/carController.js'

const router = express.Router();

//Falta aniadir los middlewares

router.post('/create',addCar)
router.get('/',getAllCar)
router.get('/car/:id',getCarById)
router.put('/update/:id',updateCar)
router.delete('/delete/:id',deleteCar)


export default router;
