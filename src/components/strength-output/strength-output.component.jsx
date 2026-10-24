import './strength-output.styles.scss'

const labels = ['', 'TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG']

const StrengthOutput = ({strength}) => {
  return (
    <div className="output-container">
      <span className="grey-600 text-preset-4 strength-label">STRENGTH</span>
      <div className="strength-display">
        <span className="grey-200 text-preset-3">{labels[strength]}</span>
        <output aria-label={strength > 0 ? `Password strength: ${labels[strength]}` : ''} aria-live="polite">
          <div className="rectangles" data-strength={strength} aria-hidden="true">
            {
              [0, 1, 2, 3].map((index) => (
                <div key={index} className={`rectangle ${index < strength ? 'filled' : ''}`}></div>
              ))
            }
          </div>
        </output>
      </div>
    </div>
  )
}

export default StrengthOutput