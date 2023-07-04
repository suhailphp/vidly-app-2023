import http from './httpService'
import config from './../config/config.json'
import { log } from 'joi-browser'

export async function getMovies() {
  let response = await http.get(config.apiEndpoint+'movie')
  return response.data
}

export async function deleteMovie(movieID) {
  let response = await http.delete(config.apiEndpoint+'movie/'+movieID)
  return response
}

export async function getMovie(movieID) {
  let response = await http.get(config.apiEndpoint+'movie/'+movieID)
  return response
}

export async function saveMovie(movie) {
  let response =null
  if(movie && movie.movieID === 'new'){
    response = await http.post(config.apiEndpoint+'movie/',movie)
  }
  else{
    response = await http.put(config.apiEndpoint+'movie/',movie)
  }
  return response
}





