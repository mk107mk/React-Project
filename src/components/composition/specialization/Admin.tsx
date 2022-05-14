import { useState } from 'react';
import { Modal } from './Modal';

export function Admin() {
  const [value, setValue] = useState('');
  const [display, setDisplay] = useState(0);
  function handleClick() {
    setValue('Admin');
    setDisplay(1);
  }
  return (
    <div>
      <button onClick={handleClick}>Admin</button>
      <Modal title={value} message={`Hello ${value}`} isLoaded={display} />
    </div>
  );
}
