import './text-field.styles.scss'
import IconCopy from '../../assets/icons/icon-copy.svg?react'
import {useState} from "react";

const TextField = () => {
  const [textToCopy, setTextToCopy] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <div className="text-field">
      <input value={textToCopy} type="text" className="text-preset-2" placeholder="P4$5W0rD!" readOnly />
      <button onClick={handleCopy} aria-label="Copy password to clipboard">
        {copied ? 'COPIED' : ''}
        <IconCopy/>
      </button>
    </div>
  )
}

export default TextField