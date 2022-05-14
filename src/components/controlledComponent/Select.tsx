import { useState } from 'react';

export function Select() {
  const [value, setValue] = useState('');
  return (
    <div>
      <label>
        select option
        <select value={value} onChange={e => setValue(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>
      <p>value : {value}</p>
    </div>
  );
}
