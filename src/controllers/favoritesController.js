import { request, response } from 'express'
import FavoritesService from '../services/favoritesService.js'

const favoritesService = new FavoritesService()

const addFavorite = async (request, response) => {
  try {
    const favoriteId = await favoritesService.addFavorite(request.body)
    return response.status(200).json({ success: true, favoriteId })
  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const getAllFavorites = async (request, response) => {
  try {
    const favorites = await favoritesService.getAllFavorites()
    return response.status(200).json({ success: true, favorites })
  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error.message
    })
  }
}



const deleteFavorite = async (request, response) => {
  try {
    const id = request.params.id
    await favoritesService.deleteFavorite(id)
    return response.status(200).json({ success: true })
  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error.message
    })
  }
}

export { addFavorite, getAllFavorites, deleteFavorite }
