export default function Example() {
  type exType = string | number;
  const name: exType = 'kim';

  const number: exType = 0;

  return (
    <div>
      <h1>{name}</h1>
      <h1>{number}</h1>
    </div>
  );
}
