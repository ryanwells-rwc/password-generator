import './App.scss'
import TextField from "./components/text-field/text-field.component.jsx";
import Form from "./components/form/form.component.jsx";
import {PasswordProvider} from "./context/PasswordContext.jsx";

const App = () => {
  return (
    <>
      <PasswordProvider>
        <h1 className="text-preset-4">Password Generator</h1>
        <TextField/>
        <Form/>
      </PasswordProvider>
    </>
  )
}

export default App
