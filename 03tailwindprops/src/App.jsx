import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IdCard from './components/IdCard'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    fullname:"Shadab",
    age:20
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test and props concept</h1>
     <IdCard userName="Shadab" btnText="Click me"/>
     <IdCard userName="Props" btnText="Visit me"/>
    </>
  )
}

export default App
