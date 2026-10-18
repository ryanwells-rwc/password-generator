import './checkbox.styles.scss'
import {useId} from "react"
import IconCheck from '../../assets/icons/icon-check.svg?react'

const Checkbox = ({label, checked, onChange}) => {
  const id = useId()

  return (
    <div className="checkbox-container">
      <div className="checkbox-wrapper">
        <input type="checkbox" id={id} checked={checked} onChange={onChange} />
        <IconCheck className="checkbox-icon" aria-hidden="true" />
      </div>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox