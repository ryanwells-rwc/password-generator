import './strength-output.styles.scss'

const StrengthOutput = ({strength}) => {
  const labels = ['', 'TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG']

  return (
    <div className="output-container">
      <span className="grey-600 text-preset-4">STRENGTH</span>
      <div className="strength-display">
        <span className="grey-200 text-preset-3">{labels[strength]}</span>
        <output>
          <div className="rectangles" data-strength={strength}>
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