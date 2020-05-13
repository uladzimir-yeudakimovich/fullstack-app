import React, { useState, useEffect } from 'react'

import Header from '../shared/header'
import Content from './content'
import Total from './total'

import service from '../services/course.service'

const Course = () => {
  const [ courses, setCourses] = useState([])

  useEffect(() => {
    service.getAll()
      .then(response => {
        setCourses(response)
      })
  }, [])

  return (
    <>
      {courses.map((course, index) => (
        <div key={index}>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </>
  )
}

export default Course
