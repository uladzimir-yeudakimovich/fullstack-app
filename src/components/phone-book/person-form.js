import React from 'react'

import Button from '../shared/button'

const PersonForm = ({ submit, name, changeName, number, changeNumber }) => {
  return (
    <form onSubmit={submit}>
      <div>
        name: <input
          value={name}
          name="name"
          onChange={changeName}
        />
      </div>
      <div>
        number: <input
          value={number}
          name="number"
          onChange={changeNumber}
        />
      </div>
      <Button type="submit" text="add" />
    </form>
  )
}

export default PersonForm