import React from 'react'

import Button from '../shared/button'

const PersonForm = ({ submit, name, changeName, number, changeNumber }) => {
  return (
    <form>
      <div>
        name: <input
          value={name}
          onChange={changeName}
        />
      </div>
      <div>
        number: <input
          value={number}
          onChange={changeNumber}
        />
      </div>
      <Button handleClick={submit} text="add" />
    </form>
  )
}

export default PersonForm