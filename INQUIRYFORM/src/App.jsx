import { useState } from 'react'
import './App.css'
import FormGroup from './Components/FormGroup'
// import './style.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <FormGroup />
      </>
  );
}

export default App
