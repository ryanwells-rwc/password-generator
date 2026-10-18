import {useState} from 'react'

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(4)
  const handleChange = (event) => {
    setSliderValue(event.target.value)
  }

  return (
    <>
      <label htmlFor="passwordLength"><span>Character Length</span><span>{sliderValue}</span></label>
      <input id="passwordLength" type="range" min="4" max="14" step="1" onChange={handleChange}/>
    </>
  )
}

export default Slider