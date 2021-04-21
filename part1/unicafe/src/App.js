import React, { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if (all === 0) {
    return (
      <div>No feedback given</div>
    );
  };
  const average =  (good - bad) / all
  const positive = good / all + ' %'
  return (
    <table>
      <tbody>
        <Statistic text='good' value={good} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='bad' value={bad} />
        <Statistic text='all' value={all} />
        <Statistic text='average' value={average} />
        <Statistic text='positive' value={positive} />
      </tbody>
    </table>
  );
};

const Statistic = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleClick = (mood) => {
    if (mood === 'good') {
      setGood(good + 1)
    }
    else if (mood === 'neutral') {
      setNeutral(neutral + 1)
    }
    else {
      setBad(bad + 1)
    }
  }
  return (
    <div>
      <Title text='Give feedback' />
      <Button handleClick={() => handleClick('good')} text='good' />
      <Button handleClick={() => handleClick('neutral')} text='neutral' />
      <Button handleClick={() => handleClick('bad')} text='bad' />
      <Title text='Statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>

  )

}

export default App
