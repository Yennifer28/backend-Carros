import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'

import {
  addReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview
} from '../controllers/reviewController.js'

const router = express.Router()
//Falta incluir los middleware
router.post('/create', authMiddleware,addReview)
router.get('/', authMiddleware,getAllReviews)
router.get('/review/:id', authMiddleware,getReviewById)
router.put('/update/:id', authMiddleware,updateReview)
router.delete('/delete/:id', authMiddleware,deleteReview)

export default router