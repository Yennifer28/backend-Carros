import FavoritesRepository from '../repositories/favoritesRepository.js'
import FavoritesModel from '../models/favoritesModel.js'
const favoritesRepository = new FavoritesRepository()

class FavoritesService {
  async addFavorite(data) {
    const newFavorite = new FavoritesModel(
      data.idusuario,
      data.idcar
    )
    const favoriteId = await favoritesRepository.addFavorite(newFavorite)
    return favoriteId
  }

  async getAllFavorites() {
    return await favoritesRepository.getAllFavorites()
  }

  async deleteFavorite(id) {
    return await favoritesRepository.deleteFavorite(id)
  }
}
export default FavoritesService