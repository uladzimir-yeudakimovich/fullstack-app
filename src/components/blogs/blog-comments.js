import React from 'react'
import { Card, Table } from 'react-bootstrap'

const BlogComments = ({ comments }) => {
  if (!comments) {
    return (<><p>No comments yet, be the first to do it</p></>)
  }

  return (
    <Card>
      <Table striped>
        <tbody>
          {comments.map(comment => (
            <tr key={comment._id}>
              <td>{comment.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  )
}

export default BlogComments