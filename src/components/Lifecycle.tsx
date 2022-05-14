import { useState, useEffect } from 'react';

export function Test() {
  const [value, setValue] = useState(0);

  useEffect(
    function () {
      const timeoutId = setTimeout(() => {
        setValue(Math.random() * 1000);
      }, 3000);

      return function () {
        clearTimeout(timeoutId);
      };
    },
    [value]
  );

  return <div>{value}</div>;
}
