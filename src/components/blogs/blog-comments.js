import React from 'react'
import { Table } from 'react-bootstrap'

const BlogComments = ({ comments }) => {
  if (!comments.length) {
    return (<><p>No comments yet, be the first to do it</p></>)
  }

  return (
    <Table striped>
      <tbody>
        {comments.map(el => (
          <tr key={el.id}>
            <td>{el.comment}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default BlogComments