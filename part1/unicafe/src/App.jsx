import React from 'react'
import { useState } from 'react'

const Header = (props) => {
  // This component is used to display the header of the application
  console.log(props)
 return(
 <div>
     <h1>{props.title}</h1>
  </div>
 )
}

const Button = ({ handleClick, text }) => (
  // This component is used to display a button with a click handler and text
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => {
  // This component is used to display each line of the statistics table

  return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
}

const Statistics = ({ title, good, neutral, bad }) => {
  // This component is used to display the statistics of the feedback
  const all = good + neutral + bad

  if (all === 0) {
    return (
      <>
        <h1>{title}</h1>
        <p>No feedback given</p>
      </>
    )
  }

  const statisticsData = [
    // This array contains the data to be displayed in the statistics table
    { text: 'good', value: good },
    { text: 'neutral', value: neutral },
    { text: 'bad', value: bad },
    { text: 'all', value: all },
    { text: 'average', value: ((good - bad) / all).toFixed(1) },
    { text: 'positive', value: ((good / all) * 100).toFixed(1) + ' %' },
  ]

  return (
    <>
      <h1>{title}</h1>
      <table>
        <tbody>
          {statisticsData.map(({ text, value }) => (
            <StatisticLine key={text} text={text} value={value} />
          ))}
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each botton with its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <Header title={'give feedback'} />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Statistics title={'statistics'} allClicks={good+neutral+bad} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
