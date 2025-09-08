import { useState } from 'react'
import React from 'react'

const Header = (props) => {
  // This component is used to display the header of the application
 return(
 <div>
     <h1>{props.title}</h1>
  </div>
 )
}
const MostVoted=({anecdotes, title})=>{

  return(
     <div>
     <h1>{title}</h1>
     {anecdotes}
  </div>

  )
}

const Button = ({text,handleClick}) => (

  // This component is used to display a button with a click handler
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = () => {
    const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes,setVotes]=useState(Array(anecdotes.length).fill(0))
  const [indexMax, setIndexMax] = useState(0)

  const handleClickvote=() => {
        const newVotes = [...votes]
        newVotes[selected] += 1
        setVotes(newVotes)
        console.log(newVotes)

        const maxVotes = Math.max(...newVotes)
        console.log(maxVotes)
        const indexMax = newVotes.indexOf(maxVotes)
        setIndexMax(indexMax)
        console.log(indexMax)


  }
  return (
    <div>
      <Header title='Anecdote of the day'/>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={() =>{setSelected((selected + 1) % anecdotes.length)}} text='next anedote'/>
      <Button handleClick={handleClickvote} text ='votes'/>
      <MostVoted anecdotes={anecdotes[indexMax]} title='Anecdote with most votes'/>


    </div>
  )
}

export default App