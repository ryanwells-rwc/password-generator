import { useState } from 'react'
import './App.scss'
import TextField from "./components/text-field/text-field.component.jsx";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-preset-4">Password Generator</h1>
      <TextField />
    </>
  )
}

export default App
