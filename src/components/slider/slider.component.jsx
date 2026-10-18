import {useState} from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import './slider.styles.scss'

const Slider = () => {
  const [value, setValue] = useState([0])

  return (
    <>
      <div className="slider-label">
        <span className="text-preset-4 grey-200">Character Length</span>
        <span className="slider-value text-preset-2">{value[0]}</span>
      </div>
      <SliderPrimitive.Root
        className="slider-root"
        min={0}
        max={14}
        step={1}
        value={value}
        onValueChange={setValue}
      >
        <SliderPrimitive.Track className="slider-track">
          <SliderPrimitive.Range className="slider-range" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="slider-thumb" aria-label="Password length" />
      </SliderPrimitive.Root>
    </>
  )
}

export default Slider