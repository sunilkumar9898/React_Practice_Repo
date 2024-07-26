import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Dist from './Components/Dist'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form/>
      {/* <Dist/> */}
    </>
  )
}

export default App
