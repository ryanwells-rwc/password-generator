import * as SliderPrimitive from '@radix-ui/react-slider'
import './slider.styles.scss'
import {usePassword} from "../../context/PasswordContext.jsx";

const Slider = () => {
  const {length, setLength} = usePassword()

  return (
    <>
      <div className="slider-label">
        <span className="text-preset-4 grey-200">Character Length</span>
        <span className="slider-value text-preset-2">{length}</span>
      </div>
      <SliderPrimitive.Root
        className="slider-root"
        min={0}
        max={20}
        step={1}
        value={[length]}
        onValueChange={(value) => setLength(value[0])}
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