import { Admin } from './Admin';
import { User } from './User';
import styled from 'styled-components';

export function Specialization() {
  return (
    <div className="App">
      <h3>특수화</h3>
      <Div>
        <User />
        <Admin />
      </Div>
    </div>
  );
}
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;
