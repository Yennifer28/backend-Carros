import  {db} from '../config/firebase.js'
import CarModel from '../models/carModel.js'

class CarRepository {

  async addCar(data){
    const car = await db.collection('cars').add({
        
        nombre : data.nombre,
        categoria : data.categoria,
        capacidad_tanque : data.capacidad_tanque,
        transmision : data.transmision,
        pasajeros : data.pasajeros,
        precio : data.precio,
        rating : data.rating,
        descripcion : data.descripcion,
        istaken : data.istaken
    })

    return car.id
  }

  async getAllCar(){
    const docs = await db.collection('cars').get()
    const cars = [] 
    docs.forEach((doc) => {
      const data = doc.data()
        cars.push(new CarModel (
          doc.id,
          data.nombre,
          data.categoria,
          data.capacidad_tanque,
          data.transmision,
          data.pasajeros,
          data.precio,
          data.rating,
          data.descripcion,
         data.istaken
        ))
    });
    return cars
  }

  async getCarById(id){
    const doc =await db.collection('cars').doc(id).get
    if(!doc.exists){
      return null
    }

    const data =doc.data()
      
    return new CarModel (
        doc.id,
        data.nombre,
        data.categoria,
        data.capacidad_tanque,
        data.transmision,
        data.pasajeros,
        data.precio,
        data.rating,
        data.descripcion,
        data.istaken
        
    
      )
    
  }

  async updateCar(id,data){
    await db.collection('cars').doc(id).update(data)
  }

  async deleteCar (id) {
    await db.collection('cars').doc(id).delete()
  }
}
export default CarRepository