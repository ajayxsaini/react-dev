import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username: "Ajay",
    age : 23
  }
  let newArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 
      rounded-xl'>Tailwind test</h1>
      <Card username = "Gitub/ajayxsaini" btnText = "Click me" />
      <Card username = {"Anjaan"} btnText = "visit me"/>
    </>
  )
}

export default App