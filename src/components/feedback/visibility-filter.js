import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterChange } from '../../reducers/filter-reducer'

const VisibilityFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

  return (
    <div>
      all
      <input
        type="radio"
        name="filter"
        checked={filter === 'ALL'}
        onChange={() => dispatch(filterChange('ALL'))}
      />
      good
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange('GOOD'))}
      />
      bad
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange('BAD'))}
      />
    </div>
  )
}

export default VisibilityFilter