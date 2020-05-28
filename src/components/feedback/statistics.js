import React from 'react'

const Statistics = ({ allFeedbacks }) => {
  const { good, neutral, bad } = allFeedbacks
  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given</div>
  }

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100 + ' %'

  return (
    <>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive}</div>
    </>
  )
}

export default Statistics
