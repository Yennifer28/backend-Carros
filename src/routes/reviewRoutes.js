import express from 'express'
//import authMiddleware from '../middlewares/authMiddleware.js'

import {
  addReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview
} from '../controllers/reviewController.js'

const router = express.Router()
//Falta incluir los middleware
router.post('/create', addReview)
router.get('/', getAllReviews)
router.get('/review/:id', getReviewById)
router.put('/update/:id', updateReview)
router.delete('/delete/:id', deleteReview)

export default router