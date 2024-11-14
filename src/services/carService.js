import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'
import CarRepository from '../repositories/carRepository.js'
import CarModel from '../models/carModel.js'

const carRepository = new CarRepository ()
const secret = process.env.JWT_SECRET
const saltround =10


class CarService {

    async addCar(data){
      const newCar =   new CarModel (
        null,
        data.nombre,
        data.categoria,
        data.capacidad_tanque,
        data.transmision,
        data.pasajeros,
        data.precio,
        data.rating,
        data.descripcion,
    
      )
      const carID = await carRepository.addCar(newCar)
      return carID
    }

    async getAllCar(){
      return await carRepository.getAllCar()
    }

    async getCarById(id){
      return await carRepository.getCarById(id)
    }

    async updateCar(id,data){

      return await carRepository.updateCar(id,data)
    }

    async deleteCar(id){
     return  await carRepository.deleteCar(id)
    }

}

export default CarService