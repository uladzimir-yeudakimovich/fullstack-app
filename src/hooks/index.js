import { useState, useEffect } from 'react'
import axios from 'axios'

export const useField = (name, type) => {
  const [value, setValue] = useState('')
  const id = name
  const onChange = (event) => setValue(event.target.value)
  const reset = () => setValue('')

  return {
    value,
    bind: {id, type, value, name, onChange},
    reset
  }
}

export const useCounter = () => {
  const [value, setValue] = useState(0)
  const increase = () => setValue(value + 1)
  const decrease = () => setValue(value - 1)
  const zero = () => setValue(0)

  return { value, increase, decrease, zero }
}

export const useCountry = source => {
  const [ value, setValue ] = useState([])
  const [ valueToShow, setValueToShow ] = useState([])

  useEffect(() => {
    axios.get(source).then(response => {
      setValue(response.data)
      setValueToShow(response.data)
    })
  }, [source])

  const onChange = (event) => setValueToShow(value.filter(el => el.name.includes(event.target.value)))

  return { value, valueToShow, filter: {onChange} }
}

export const useResource = baseUrl => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    axios.get(baseUrl).then(response => {
      setResources(response.data)
    })
  }, [baseUrl])

  const create = resource => {
    axios.post(baseUrl, resource).then(response => {
      setResources(resources.concat(response))
    })
  }

  const update = (id, resource) => {
    axios.post(`${baseUrl}/${id}`, resource).then(response => {
      setResources(resources.map(el => el.id !== id ? el : response))
    })
  }

  const remove = id => {
    axios.delete(`${baseUrl}/${id}`).then(() => {
      setResources(resources.filter(el => el.id !== id))
    })
  }

  const service = { create, update, remove }

  return [resources, service]
}