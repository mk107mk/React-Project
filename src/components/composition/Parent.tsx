import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  color: string;
  children: ReactNode;
  left: ReactNode;
  right: ReactNode;
}

export function Parent(props: Props) {
  return (
    <Div color={props.color}>
      <p>{props.children}</p>
      <Nav>
        <div>{props.left}</div>
        <div>{props.right}</div>
      </Nav>
    </Div>
  );
}

const Div = styled.div`
  border: 3px solid ${props => props.color || 'gray'};
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
