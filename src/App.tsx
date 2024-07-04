import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
import RangeSelector from './components/RangeSelector';
import OptionCheckbox from './components/OptionCheckbox';

function App() {
  // Declared the variables for password configuration here
  const [passwordLength, setPasswordLength] = useState(8); 
  const [numbersIncluded, setNumbersIncludedVal] = useState(false);
  const [specialCharsIncluded, setSpecialCharsIncluded] = useState(false);
  const [password, setPassword] = useState("");

  // Password reference
  const passwordRef = useRef(null);

  // Function to generate the new password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let nums = "1234567890";
    let specialChars = "!@#$%^&*(){}[]:;'<>/?.,~`-=_+|";

    if(numbersIncluded) str += nums;

    if(specialCharsIncluded) str += specialChars;

    for (let i = 1; i <= passwordLength; i++) {
      let idx = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(idx);
    }

    setPassword(pass);
  }, [passwordLength, numbersIncluded, specialCharsIncluded, setPassword]);

  // Function to copy the password to clipboard
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Initiating the things here
  useEffect(() => {
    passwordGenerator();
  }, [passwordLength, numbersIncluded, specialCharsIncluded, passwordGenerator]);

  return (
    <>
      <div className='w-full bg-gray-900 max-w-md mx-auto px-4 py-3 my-8 
        shadow-md rounded-lg text-orange-500'>
        <h1 className='flex text-center text-wrap mb-3 text-white'>Password generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} ref={passwordRef}
          className='outline-none w-full py-2 px-3' placeholder='Password' readOnly/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        
        {
          <RangeSelector 
            selectedPasswordLength={passwordLength}
            onLengthChange={setPasswordLength}
          />
        }

        {
          <OptionCheckbox 
            title='Include Numbers'
            value={numbersIncluded}
            onValueChange={setNumbersIncludedVal} 
          />
        }

        {
          <OptionCheckbox 
            title='Include Special characters'
            value={specialCharsIncluded}
            onValueChange={setSpecialCharsIncluded} 
          />
        }
      </div>
    </>
  )
}

export default App


