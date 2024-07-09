import { useState } from 'react'

import './App.css'
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import Form from './Component/Form';

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Form/>
      </>
  );
}

export default App
