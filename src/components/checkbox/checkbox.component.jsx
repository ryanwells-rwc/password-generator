import './checkbox.styles.scss'
import {useId} from "react"

const Checkbox = ({label, checked, onChange}) => {
  const id = useId()

  return (
    <div className="checkbox-container">
      <input type="checkbox" id={id} checked={checked} onChange={onChange}/>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox