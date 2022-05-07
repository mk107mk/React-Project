import { ReactNode } from 'react';

interface Props {
  test?: ReactNode;
  children?: ReactNode;
}

export function Wrapper(props: Props) {
  return (
    <>
      <h2>wrapper</h2>
      <div>chlildren : {props.children}</div>
      <div>test : {props.test}</div>
    </>
  );
}
