import db from '../config/firebase.js'
import ReviewModel from '../models/reviewModel.js'

class ReviewRepository {
  async addReview(data) {
    const review = await db.collection('reviews').add({
      idCar: data.idCar,
      idUser: data.idUser,
      description: data.description,
      rate: data.rate
    })
    return review.id
  }

  async getAllReviews() {
    const docs = await db.collection('reviews').get()
    const reviews = [];
    docs.forEach((doc) => {
      const data = doc.data();
      reviews.push(new ReviewModel(
        doc.id,
        data.idCar,
        data.idUser,
        data.description,
        data.rate
      ))
    })
    return reviews
  }

  async getReviewById(id) {
    const doc = await db.collection('reviews').doc(id).get();
    if (!doc.exists) {
      return null
    }
    const data = doc.data();
    return new ReviewModel(
      doc.id,
      data.idCar,
      data.idUser,
      data.description,
      data.rate
    )
  }

  async updateReview(id, data) {
    await db.collection('reviews').doc(id).update(data)
  }

  async deleteReview(id) {
    await db.collection('reviews').doc(id).delete()
  }
}

export default ReviewRepository
