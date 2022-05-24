import { createContext, useContext, useState } from 'react';

const ContentContext = createContext<{
  value: string;
  setValue: (value: string) => void;
} | null>(null);

export function ContextExample() {
  const [value, setState] = useState('');
  return (
    <ContentContext.Provider value={{ value: value, setValue: setState }}>
      <div className="App">
        <FirstComponent />
      </div>
    </ContentContext.Provider>
  );
}

function FirstComponent() {
  return (
    <div>
      <h5>I am the first component</h5>
      <SecondComponent />
    </div>
  );
}

function SecondComponent() {
  return (
    <div>
      <h5>I am the second component</h5>
      <ThirdComponent />
    </div>
  );
}

function ThirdComponent() {
  return (
    <div>
      <h5>I am the third component</h5>
      <ComponentNeedingProps />
    </div>
  );
}

function ComponentNeedingProps() {
  const context = useContext(ContentContext)!;
  return (
    <>
      <h3>{context?.value}</h3>
      <button
        onClick={() => {
          context.setValue('새로운 값');
        }}
      >
        버튼
      </button>
    </>
  );
}
