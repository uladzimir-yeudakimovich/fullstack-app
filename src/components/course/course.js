import React from 'react'

import Header from '../shared/header'
import Content from './content'
import Total from './total'

import course from '../../mock/course'

const Course = () => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course
