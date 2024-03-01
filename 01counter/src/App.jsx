import { useState } from 'react'

import './App.css'

function App() {

//counter -> a variable
//setCounter -> a function
//useState -> it returns an array
  const[counter, setCounter] = useState(15)
  // let counter = 15
  
  const addValue = () => {
    // counter = counter + 1
    // console.log(counter);
    setCounter(counter + 1)
  }

  return (
  <>
  <h1>React Prasad Perugu {counter}</h1>
  <h2>Counter value:{counter} </h2>
  <button
  onClick={addValue}
  >Add Value</button> {" "}
  <button>Remove Value</button>
  <p>footer: {counter}</p>
  </>
  )
}

export default App
