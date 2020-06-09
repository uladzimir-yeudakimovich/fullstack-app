import React from 'react'
import { useDispatch } from 'react-redux'
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap'

import { filterChange } from '../../reducers/filter-reducer'

const VisibilityFilter = () => {
  const dispatch = useDispatch()

  return (
    <ToggleButtonGroup
      type="radio"
      name="filter"
      defaultValue={['ALL']}
      onChange={(selectedValue) => dispatch(filterChange(selectedValue))}>
      <ToggleButton value={'ALL'}>All</ToggleButton>
      <ToggleButton value={'GOOD'}>Goog</ToggleButton>
      <ToggleButton value={'BAD'}>Bad</ToggleButton>
    </ToggleButtonGroup>
  )
}

export default VisibilityFilter