import './text-field.styles.scss'
import IconCopy from '../../assets/icons/icon-copy.svg?react'
import {useState} from "react";
import {usePassword} from "../../contexts/password.context.jsx";

const TextField = () => {
  const {password} = usePassword();
  const [status, setStatus] = useState('idle');

  const handleCopy = async () => {
    if (!password) return;

    try {
      await navigator.clipboard.writeText(password);
      setStatus('copied');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
      setStatus('failed');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'copied':
        return 'COPIED';
      case 'failed':
        return 'FAILED';
      default:
        return null;
    }
  };

  const getAccessibilityText = () => {
    switch (status) {
      case 'copied':
        return 'Password copied to clipboard';
      case 'failed':
        return 'Failed to copy password to clipboard';
      default:
        return '';
    }
  };

  return (
    <div className="text-field">
      <input value={password} type="text" className="text-preset-2" placeholder="P4$5W0rD!" readOnly aria-readonly="true" aria-live="polite" aria-label="Generated password"/>
      <button className="copy-button" onClick={handleCopy} aria-label="Copy password to clipboard" role="status" data-status={status}>
        {getButtonText()}
        <IconCopy/>
      </button>
      <span aria-live="assertive" className="sr-only">{getAccessibilityText()}</span>
    </div>
  )
}

export default TextField