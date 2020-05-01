import React from 'react'

import StatisticLine from './statisticLine'

const Statistics = ({ allFeedbacks }) => {
  const { good, neutral, bad } = allFeedbacks;
  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given</div>
  }
  
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100 + ' %';

  return (
    <>
      <StatisticLine name='good' counter={good}/>
      <StatisticLine name='neutral' counter={neutral}/>
      <StatisticLine name='bad' counter={bad}/>
      <StatisticLine name='all' counter={all}/>
      <StatisticLine name='average' counter={average}/>
      <StatisticLine name='positive' counter={positive}/>
    </>
  )
}

export default Statistics
