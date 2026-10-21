import {useState} from "react";
import Slider from "../slider/slider.component.jsx"
import Checkbox from "../checkbox/checkbox.component.jsx";
import StrengthOutput from "../strength-output/strength-output.component.jsx";
import GenerateButton from "../generate-button/generate-button.component.jsx";
import './form.styles.scss'

const Form = () => {
  const [hasUppercase, setHasUppercase] = useState(false)
  const handleUppercaseChange = (e) => {
    setHasUppercase(e.target.checked)
  }

  const [hasLowercase, setHasLowercase] = useState(false)
  const handleLowercaseChange = (e) => {
    setHasLowercase(e.target.checked)
  }

  const [hasNumbers, setHasNumbers] = useState(false)
  const handleNumbersChange = (e) => {
    setHasNumbers(e.target.checked)
  }

  const [hasSymbols, setHasSymbols] = useState(false)
  const handleSymbolsChange = (e) => {
    setHasSymbols(e.target.checked)
  }

  const [strength, setStrength] = useState(0)

  const handleGenerate = () => {
    setStrength(Number(hasUppercase) + Number(hasLowercase) + Number(hasNumbers) + Number(hasSymbols))
  }

  return (
    <form>
      <Slider />
      <div className="checkbox-section">
        <Checkbox label="Include Uppercase Letters" checked={hasUppercase} onChange={handleUppercaseChange}/>
        <Checkbox label="Include Lowercase Letters" checked={hasLowercase} onChange={handleLowercaseChange}/>
        <Checkbox label="Include Numbers" checked={hasNumbers} onChange={handleNumbersChange}/>
        <Checkbox label="Include Symbols" checked={hasSymbols} onChange={handleSymbolsChange}/>
      </div>
      <StrengthOutput strength={strength} />
      <GenerateButton onClick={handleGenerate} />
    </form>
  )
}

export default Form;