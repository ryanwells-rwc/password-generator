import './text-field.styles.scss'
import IconCopy from '../../assets/icons/icon-copy.svg?react'
import {useState} from "react";
import {usePassword} from "../../context/PasswordContext.jsx";

const TextField = () => {
  const {password} = usePassword();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!password) return;

    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <div className="text-field">
      <input value={password} type="text" className="text-preset-2" placeholder="P4$5W0rD!" readOnly aria-readonly="true" aria-live="polite" aria-label="Generated password"/>
      <button onClick={handleCopy} aria-label="Copy password to clipboard" aria-live="assertive">
        {copied ? 'COPIED' : ''}
        <IconCopy/>
      </button>
      <span aria-live="assertive" className="sr-only">{copied ? 'Password copied' : ''}</span>
    </div>
  )
}

export default TextField