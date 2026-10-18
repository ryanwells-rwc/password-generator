import {useState} from 'react'
import './slider.styles.scss'

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(4)
  const handleChange = (event) => {
    setSliderValue(event.target.value)
  }

  return (
    <>
      <label htmlFor="passwordLength"><span className="text-preset-4 grey-200">Character Length</span><span className="slider-value text-preset-2">{sliderValue}</span></label>
      <input id="passwordLength" type="range" min="4" max="14" step="1" onChange={handleChange}/>
    </>
  )
}

export default Slider