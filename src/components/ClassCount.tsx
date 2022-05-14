import React from 'react';

export class ClassCount extends React.Component<any, any> {
  value: any;
  state = {
    count: 0,
  };

  //   클래스 컴포넌트 생명주기 메서드
  //   componentDidMount 메서드는 컴포넌트 출력물이
  //   DOM에 렌더링 된 후에 실행된다
  componentDidMount() {
    this.value = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
      this.setState((state: any) => {
        return { count: state.count + 1 };
      });
      // setState 는 비동기적으로 실행된다
    }, 1000);
  }
  //   setState호출 덕분에 React는 state가 변경된 것을 인지하고
  //   화면에 표시될 내용을 알아내기 위해 render()메서드를 다시 호출한다

  //   재렌더링이 일어나는 시점에 Interval 메모리를 헤제한다
  componentWillUnmount() {
    clearInterval(this.value);
  }

  render() {
    return (
      <>
        <h2>클래스 컴포넌트 숫자 카운트</h2>
        <h4>{this.state.count}</h4>
      </>
    );
  }
}
