import React from 'react'

import Button from '../shared/button'

const CreateForm = ({ title, setTitle, author, setAuthor, url, setUrl, createBlog }) => {
  return (
    <form>
      <div>
        title <input
          type="text"
          value={title}
          name="title"
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        author <input
          type="text"
          value={author}
          name="author"
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
        url <input
          type="text"
          value={url}
          name="url"
          onChange={({ target }) => setUrl(target.value)}
        />
      </div>
      <Button handleClick={createBlog} text="create" />
    </form>
  )
}

export default CreateForm