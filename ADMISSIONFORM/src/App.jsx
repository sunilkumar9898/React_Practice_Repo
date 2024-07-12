import { useState } from 'react'
import './App.css'
import Form from './component/Form'
import Check from './component/Check'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form/>
  {/* <Check/> */}
    </>
  )
}

export default App
