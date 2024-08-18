import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter =15
  let [counter,setCounter]=useState(15)
  const addvalue=()=>{
    counter=counter +1;
    console.log("value added",counter);
    setCounter(counter)
  }
  const removevalue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
     
      <h1>Hook basic by using multiple counter variable</h1>
      <h2>Counter value:{counter}</h2>
      <button
      onClick={addvalue}>Add value :{counter}</button>
      <br/>
      <button
      onClick={removevalue}>Remove value :{counter}</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
