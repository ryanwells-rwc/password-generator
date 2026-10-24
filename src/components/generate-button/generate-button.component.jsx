import './generate-button.styles.scss'
import IconArrowRight from '../../assets/icons/icon-arrow-right.svg?react'

const GenerateButton = ({onClick}) => {
  return (
    <button className="text-preset-4 grey-800" type="button" onClick={onClick}><span className="mr-16">GENERATE</span><IconArrowRight aria-hidden="true"/></button>
  )
}

export default GenerateButton