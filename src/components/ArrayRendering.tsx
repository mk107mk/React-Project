// const data = [{name: '민수', age: 12}, {name: '철수', value: 24}, {name: '영희', value: 21}];

export function Array() {
  const data = [
    { name: '민수', age: 12 },
    { name: '철수', value: 24 },
    { name: '영희', value: 21 },
  ];

  const dataList = data.map(value => {
    return value.age ? (
      <li key={value.name}>
        이름 : {value.name} 나이 : {value.age}
      </li>
    ) : (
      <li key={value.name}>
        이름 : {value.name} value : {value.value}
      </li>
    );
  });

  return <ul>{dataList}</ul>;
}
