export function Map() {
  const numbers = [
    { value: 'one', id: 1 },
    { value: 'two', id: 2 },
    { value: 'three', id: 3 },
    { value: 'four', id: 4 },
  ];
  const array = [1, 2, 3, 4, 5];

  const listItems = numbers.map(number => (
    <li key={number.id}>
      value : {number.value} key :{number.id}
    </li>
  ));

  const listArray = array.map(number => <li>{number}</li>);

  return (
    <>
      <h1>Map</h1>
      <ul>{listItems}</ul>
      <ul>{listArray}</ul>
    </>
  );
}
