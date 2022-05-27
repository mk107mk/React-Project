import { createContext, Dispatch, useContext, useMemo, useState } from 'react';

const ContentContext = createContext<{
  value: number;
  update: (value: number) => void;
} | null>(null);

export default function Context() {
  const [value, setValue] = useState(0);
  const store = useMemo(() => ({ value, update: setValue }), [value, setValue]);
  return (
    <ContentContext.Provider value={{ value: value, update: setValue }}>
      <div>
        <button onClick={() => setValue(value + 1)}>증가</button>
        <button onClick={() => setValue(value - 1)}>감소</button>
        <ChildComponent />
        <ChildComponent2 />
      </div>
    </ContentContext.Provider>
  );
}

function ChildComponent() {
  const context = useContext(ContentContext)!;

  return (
    <div>
      <button onClick={() => context.update(context.value * 2)}>x2 증가</button>
    </div>
  );
}

function ChildComponent2() {
  const context = useContext(ContentContext)!;

  return <div>{context.value}</div>;
}
