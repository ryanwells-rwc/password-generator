import './checkbox.styles.scss'
import {useId} from "react"

const Checkbox = ({label, checked, onChange}) => {
  const id = useId()

  return (
    <>
      <label htmlFor={id}>
        <input type="checkbox" id={id} checked={checked} onChange={onChange}/>
      </label>
      <span>{label}</span>
    </>
  )
}

export default Checkbox