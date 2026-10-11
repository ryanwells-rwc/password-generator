import './text-field.styles.scss'
import IconCopy from '../../assets/icons/icon-copy.svg?react'

const TextField = () => {
  return (
    <div className="text-field">
      <input type="text" className="text-preset-2" placeholder="P4$5W0rD!" />
      <button aria-label="Copy password to clipboard"><IconCopy/></button>
    </div>
  )
}

export default TextField