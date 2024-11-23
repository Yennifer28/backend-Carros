import {db} from '../config/firebase.js'
import FavoritesModel from '../models/favoritesModel.js'

class FavoritesRepository {
  async addFavorite(data) {
    const favorite = await db.collection('favorites').add({
      idusuario: data.idusuario,
      idcar: data.idcar
    })
    return favorite.id
  }

  async getAllFavorites() {
    const docs = await db.collection('favorites').get()
    const favorites = []
    docs.forEach((doc) => {
      const data = doc.data()
      favorites.push(new FavoritesModel(
        doc.id,
        data.idusuario,
        data.idcar
      ))
    })
    return favorites
  }

  async deleteFavorite(id) {
    await db.collection('favorites').doc(id).delete()
  }
}

export default FavoritesRepository