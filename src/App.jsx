import './App.scss'
import TextField from "./components/text-field/text-field.component.jsx";
import Form from "./components/form/form.component.jsx";
import {PasswordProvider} from "./contexts/password.context.jsx";

const App = () => {
  return (
    <main className="app-container">
      <PasswordProvider>
        <h1 className="text-preset-4">Password Generator</h1>
        <TextField/>
        <Form/>
      </PasswordProvider>
    </main>
  )
}

export default App
