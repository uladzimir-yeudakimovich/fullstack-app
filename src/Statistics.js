import React from 'react'

import StatisticLine from './StatisticLine'

const Statistics = ({ allClicks }) => {
  const { good, neutral, bad } = allClicks;
  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given</div>
  }
  
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100 + ' %';

  return (
    <div>
      <StatisticLine name='good' counter={good}/>
      <StatisticLine name='neutral' counter={neutral}/>
      <StatisticLine name='bad' counter={bad}/>
      <StatisticLine name='all' counter={all}/>
      <StatisticLine name='average' counter={average}/>
      <StatisticLine name='positive' counter={positive}/>
    </div>
  )
}

export default Statistics
