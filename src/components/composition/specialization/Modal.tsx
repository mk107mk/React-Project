import { useState } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  message: string;
  isLoaded: number;
}

export function Modal(props: Props) {
  function handleLoad() {
    alert('display : none');
  }

  return props.isLoaded ? (
    <ModalNav onClick={handleLoad}>
      <ModalContent>
        <h1>{props.title}</h1>
        <h2>{props.message}</h2>
      </ModalContent>
    </ModalNav>
  ) : (
    <> </>
  );
}

const ModalNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  width: 20%;
  height: 150px;
`;
