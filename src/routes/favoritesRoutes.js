import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'

import {
  addFavorite,
  getAllFavorites,
 
  deleteFavorite
} from '../controllers/favoritesController.js'

const router = express.Router()

// Rutas para el modelo Favorites
router.post('/create', authMiddleware,addFavorite)
router.get('/', 
  //authMiddleware,
  getAllFavorites)
router.delete('/delete/:id', 
  //authMiddleware,
  deleteFavorite)

export default router