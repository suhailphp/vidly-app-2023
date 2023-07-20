import http from './httpService'
import config from '../config/config.json'

// export async function getMovies() {
//   let response = await http.get(config.apiEndpoint+'movie')
//   return response.data
// }

// export async function deleteMovie(movieID) {
//   let response = await http.delete(config.apiEndpoint+'movie/'+movieID)
//   return response
// }

// export async function getMovie(movieID) {
//   let response = await http.get(config.apiEndpoint+'movie/'+movieID)
//   return response
// }

export async function registerEmployee(employee) {
  let response =null
  response = await http.post(config.apiEndpoint+'register/',employee)
  return response
}





