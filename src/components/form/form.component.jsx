import './form.styles.scss'
import Slider from "../slider/slider.component.jsx";

const Form = () => {
  return (
    <form>
      <Slider />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <StrengthOutput />
      <GenerateButton />
    </form>
  )
}

export default Form;