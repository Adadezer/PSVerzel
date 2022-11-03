import { useState } from 'react';
import PsVerzelContext from './PsVerzelContext';

export default function InputsProvider({ children }) {
  const [valueInput, setValueInput] = useState('');

  const myContext = {
    valueInput,
    setValueInput,
  };

  return (
    <PsVerzelContext.Provider value={ myContext }>
      {children}
    </PsVerzelContext.Provider>
  );
}
