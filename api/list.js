import axios from 'axios'
import { baseUrl } from './_env'

export default {
  // GET http://....:3000/ranking
  ranking: () => axios.get(`${baseUrl}/ranking`),
  // GET http://....:3000/genre
  genre: () => axios.get(`${baseUrl}/genre`),
  // GET http://....:3000/boardgame
  boardgame: () => axios.get(`${baseUrl}/boardgame`),
  // GET http://....:3000/boardgame/:id
  get: (id) => axios.get(`${baseUrl}/boardgame/${id}`),
  // GET http://....:3000/boardgame?q=keyword
  search: (keyword) => axios.get(`${baseUrl}/boardgame?q=${keyword}`), 
}