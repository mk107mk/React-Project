import { useState } from 'react';
import { Modal } from './Modal';

export function User() {
  const [value, setValue] = useState('');
  const [display, setDisplay] = useState(0);
  function handleClick() {
    setValue('User1');
    setDisplay(1);
  }
  return (
    <div>
      <button onClick={handleClick}>User</button>
      <Modal title={value} message={`Hello ${value}`} isLoaded={display} />
    </div>
  );
}
