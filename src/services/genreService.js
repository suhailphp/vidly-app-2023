import http from './httpService'
import config from './../config/config.json'


export async function getGenres() {
  let response = await http.get(config.apiEndpoint+'genre')
  //console.log(response.data)
  return response.data
  //return response.filter(g => g);
}
