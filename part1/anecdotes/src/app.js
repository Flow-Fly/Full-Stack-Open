import React, { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const NumVotes = ({votes}) => <div>has {votes} votes</div>
const MostVoted = ({votes, anecdotes}) => {
  let max = votes[0]
  let index = 0
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > max) {
      max = votes[i]
      index = i
    }
  }
  return <p>{anecdotes[index]}</p>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  const randomNum = () => {
    let num = Math.floor(Math.random() * Math.floor(anecdotes.length))
    setSelected(num)
  }
  return (
    <div>
      <Title text='Anecdote of the day' />
      {anecdotes[selected]}
      <NumVotes votes={votes[selected]} />
      <div>
        <Button handleClick={vote} text='vote' />
        <Button handleClick={randomNum} text='next anecdote' />
      </div>
      <div>
        <Title text='Anecdote with most votes' />
        <MostVoted votes={votes} anecdotes={anecdotes} />
      </div>
    </div>
  )
}
export default App