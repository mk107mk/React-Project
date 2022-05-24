// hooks를 통한 성능 최적화
// 아래 예제에서 메모리 누수, 불필요한 렌더링을 최적화 하기

import React, {
  ReactNode,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';

export default function Example() {
  const [value, setValue] = useState(0);

  const handleClick = useCallback((value: number) => {
    setValue(value);
  }, []);

  useEffect(() => {
    const increaseValue = setInterval(() => setValue(value + 1), 1000);
    return function () {
      clearInterval(increaseValue);
    };
  });

  return (
    <div>
      <Container>
        <ClearButton value={0} disabled={value === 0} onClick={handleClick} />
        <ClearButton value={1} disabled={value === 1} onClick={handleClick} />
      </Container>
    </div>
  );
}

function Container({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

const ClearButton = React.memo(function (props: any) {
  if (props.value === 0) {
    console.log('첫 번째 버튼 렌더링');
  } else if (props.value === 1) {
    console.log('두 번째 버튼 렌더링');
  }
  return (
    <div>
      <button
        disabled={props.disabled}
        onClick={() => props.onClick(props.value)}
      >
        버튼버튼
      </button>
    </div>
  );
});
