class ReviewModel {

  constructor (id,idCar,idUser,description,rate, date_review) {

    this.id = id;
    this.idCar = idCar
    this.idUser = idUser
    this.description = description
    this.rate = rate
    this.date_review = date_review
  }
}

export default ReviewModel