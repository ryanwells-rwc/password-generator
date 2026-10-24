import {createContext, useContext, useState} from 'react';

const PasswordContext = createContext();

export function PasswordProvider({ children }) {
  const [options, setOptions] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false
  });

  const setOption = (key, value) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  const [length, setLength] = useState(14);
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);

  const generatePassword = () => {
    const charSets = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+[]{}|;:,.<>?'
    };

    let pool = '';
    if (options.uppercase) pool += charSets.uppercase;
    if (options.lowercase) pool += charSets.lowercase;
    if (options.numbers) pool += charSets.numbers;
    if (options.symbols) pool += charSets.symbols;

    if (pool === '') {
      setPassword('');
      setStrength(0);
      return;
    }

    const guaranteed = [];
    if (options.uppercase) guaranteed.push(charSets.uppercase[Math.floor(Math.random() * charSets.uppercase.length)]);
    if (options.lowercase) guaranteed.push(charSets.lowercase[Math.floor(Math.random() * charSets.lowercase.length)]);
    if (options.numbers) guaranteed.push(charSets.numbers[Math.floor(Math.random() * charSets.numbers.length)]);
    if (options.symbols) guaranteed.push(charSets.symbols[Math.floor(Math.random() * charSets.symbols.length)]);

    let adjustedLength = Math.max(length, guaranteed.length);

    for (let i = guaranteed.length; i < adjustedLength; i++) {
      guaranteed.push(pool[Math.floor(Math.random() * pool.length)]);
    }

    for (let i = guaranteed.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [guaranteed[i], guaranteed[j]] = [guaranteed[j], guaranteed[i]];
    }

    setPassword(guaranteed.join(''));
    setStrength(Number(options.uppercase) + Number(options.lowercase) + Number(options.numbers) + Number(options.symbols));
  };

  const value = {
    options,
    setOption,
    length,
    setLength,
    password,
    setPassword,
    strength,
    setStrength,
    generatePassword,
  };

  return (
    <PasswordContext.Provider value={value}>
      {children}
    </PasswordContext.Provider>
  );
}

export function usePassword() {
  return useContext(PasswordContext);
}