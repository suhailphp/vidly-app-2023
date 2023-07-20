import http from './httpService'
import config from '../config/config.json'

export async function loginEmployee(employee) {
  let response =null
  response = await http.post(config.apiEndpoint+'auth/',employee)
  return response
}