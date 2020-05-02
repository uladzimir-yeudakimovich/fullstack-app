import React from 'react'

const PersonForm = ({ submit, name, changeName, number, changeNumber }) => {
  return (
    <form onSubmit={submit}>
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
      <button type="submit">add</button>
    </form>
  )
}

export default PersonForm