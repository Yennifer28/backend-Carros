import CarService from '../services/carService.js'

const carService = new CarService ()

const addCar = async(request,response) => {
  try {
      const carId = await carService.addCar(request.body)
      return response.status(200).json({success : true ,carId})
  }catch (error) {
        return response.status(400).json({
            success:false,
            message: error.message
        })
      }
}

const getAllCar = async (request,response) =>{
  try {
    const cars = await carService.getAllCar()
    return response.status(200).json({success : true ,cars})
}catch (error) {
      return response.status(400).json({
          success:false,
          message: error.message

      })
    }
}


const getCarById = async (request,response) =>{
  try {
    const id = request.params.id
    const car = await carService.getCarById(id)

    if(!car)
      {
          return response.status(404).json({
              success:false,
              message: 'Car Not Found :( pipipi'  
          })
      }else{

          return response.status(200).json({success : true,car})

      }

  }catch (error) {
      return response.status(400).json({
          success:false,
          message: error.message

      })
    }
}

const updateCar = async (request,response) => {
  try {
    const id = request.params.id
    await carService.updateCar(id,request.body)
    return response.status(200).json({success : true })

    
  } catch (error) {
    return response.status(400).json({
      success:false,
      message: error.message

  })
  }
}

const deleteCar = async (request,response) =>{
  try {
    const id = request.params.id
    await carService.deleteCar(id)
    return response.status(200).json({success : true })

    
  } catch (error) {
    return response.status(400).json({
      success:false,
      message: error.message

  })
  }
}

export  {addCar,getAllCar,getCarById,deleteCar,updateCar}