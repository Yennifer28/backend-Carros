import { request, response } from 'express'
import ReviewService from '../services/reviewService.js'

const reviewService = new ReviewService()

const addReview = async (request, response) => {
  try {
    const reviewId = await reviewService.addReview(request.body)
    return response.status(200).json({ success: true, reviewId })
  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error.message
    })
  } 
}




const getAllReviews = async (request, response) => {
  try {
    const reviews = await reviewService.getAllReviews()
    return response.status(200).json({ success: true, reviews })
  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const getReviewById = async (request, response) => {
  try {
    const id = request.params.id
    const review = await reviewService.getReviewById(id)

    if (!review)  {
      return response.status(404).json({
        success: false,
        message: 'Review Not Found'
      })
    } else {
      return response.status(200).json({ success: true, review })
    }

  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const updateReview = async (request, response) => {
  try {
     const id = request.params.id
    await reviewService.updateReview(id, request.body)
    return response.status(200).json({ success: true })
  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const deleteReview = async (request, response) => {
  try {
    const id = request.params.id
    await reviewService.deleteReview(id)
       return response.status(200).json({ success: true })
  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error.message
    })
  }
}

export { addReview, getAllReviews, getReviewById, updateReview, deleteReview }
