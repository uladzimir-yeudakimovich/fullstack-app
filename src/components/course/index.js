import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

import Content from './content'
import Total from './total'
import service from '../shared/service'

const Course = () => {
  const [ courses, setCourses] = useState([])

  useEffect(() => {
    service.getAll('courses')
      .then(response => {
        setCourses(response)
      })
  }, [])

  return (
    <Card>
      <Card.Header as="h5">Courses</Card.Header>
      {courses.map(course => (
        <Card.Body key={course.id}>
          <Card.Title>{course.name}</Card.Title>
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </Card.Body>
      ))}
    </Card>
  )
}

export default Course
