import axios from 'axios'
const baseUrl = 'https://uladzimir-yeudakimovich.herokuapp.com/api/'

const getAll = (api) => {
  const request = axios.get(baseUrl + api)
  return request.then(response => response.data)
}

const create = (api, newObject) => {
  const request = axios.post(baseUrl + api, newObject)
  return request.then(response => response.data)
}

const update = (api, id, newObject) => {
  const request = axios.put(`${baseUrl + api}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (api, id) => {
  const request = axios.delete(`${baseUrl + api}/${id}`)
  return request.then(response => response.data)
}

export default { getAll, create, update, remove }