import axios from 'axios'
const baseUrl = 'http://localhost:4000/'
// const baseUrl = 'https://uladzimir-yeudakimovich.herokuapp.com/'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getToken = async (api, newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(`${baseUrl + api}`, newObject, config)
  return response.data
}

const getAll = (api) => {
  const config = {
    headers: { Authorization: token },
  }
  const request = axios.get(`${baseUrl}api/${api}`, config)
  return request.then(response => response.data)
}

const create = (api, newObject) => {
  const request = axios.post(`${baseUrl}api/${api}`, newObject)
  return request.then(response => response.data)
}

const update = (api, id, newObject) => {
  const request = axios.put(`${baseUrl}api/${api}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (api, id) => {
  const request = axios.delete(`${baseUrl}api/${api}/${id}`)
  return request.then(response => response.data)
}

export default { setToken, getToken, getAll, create, update, remove }