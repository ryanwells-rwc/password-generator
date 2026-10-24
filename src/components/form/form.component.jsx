import Slider from "../slider/slider.component.jsx"
import Checkbox from "../checkbox/checkbox.component.jsx";
import StrengthOutput from "../strength-output/strength-output.component.jsx";
import GenerateButton from "../generate-button/generate-button.component.jsx";
import './form.styles.scss'
import {usePassword} from "../../context/PasswordContext.jsx";

const Form = () => {
  const { options, setOption, strength, generatePassword } = usePassword();

  return (
    <form>
      <Slider />
      <div className="checkbox-section">
        <Checkbox label="Include Uppercase Letters" checked={options.uppercase} onChange={(e) => setOption('uppercase', e.target.checked)}/>
        <Checkbox label="Include Lowercase Letters" checked={options.lowercase} onChange={(e) => setOption('lowercase', e.target.checked)}/>
        <Checkbox label="Include Numbers" checked={options.numbers} onChange={(e) => setOption('numbers', e.target.checked)}/>
        <Checkbox label="Include Symbols" checked={options.symbols} onChange={(e) => setOption('symbols', e.target.checked)}/>
      </div>
      <StrengthOutput strength={strength} />
      <GenerateButton onClick={generatePassword} />
    </form>
  )
}

export default Form;