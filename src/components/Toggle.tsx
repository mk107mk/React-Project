import { Login } from './Login';
import { useState, useEffect } from 'react';

export function Toggle() {
  const [state, setState] = useState(false);

  function toggleLogin() {
    setState(!state);
  }

  return (
    <>
      <button onClick={toggleLogin}>{state ? '로그인' : '로그아웃'}</button>
      <Login isLoggedIn={state} />
    </>
  );
}
