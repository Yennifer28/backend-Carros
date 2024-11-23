import ReviewRepository from '../repositories/reviewRepository.js'
import ReviewModel from '../models/reviewModel.js'
const reviewRepository = new ReviewRepository()

class ReviewService {
  async addReview(data) {
    const newReview = new ReviewModel(
      null,
      data.idCar,
      data.idUser,
      data.description,
      data.rate
    )
    const reviewId = await reviewRepository.addReview(newReview)
    return reviewId
  }

  async getAllReviews() {
    return await reviewRepository.getAllReviews()
  }

  async getReviewById(id) {
    return await reviewRepository.getReviewById(id)
  }

  async updateReview(id, data) {
    return await reviewRepository.updateReview(id, data)
  }

  async deleteReview(id) {
    return await reviewRepository.deleteReview(id)
  }
}

export default ReviewService