import { useState } from 'react'

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

export const useCountry = () => {}