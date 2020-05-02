import React from 'react'

import Header from '../shared/header'
import Content from './content'
import Total from './total'

import courses from '../../mock/course'

const Course = () => {
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
