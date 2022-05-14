import { Left } from './Left';
import { Parent } from './Parent';
import { Right } from './Right';

export function Children() {
  return (
    <Parent color="blue" left={<Left />} right={<Right />}>
      <h1>component</h1>
      <h2>composition</h2>
    </Parent>
  );
}
