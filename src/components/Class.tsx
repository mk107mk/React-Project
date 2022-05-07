import React from 'react';
import { ReactNode } from 'react';

interface Props {
  name?: string;
  num?: number;
  children?: ReactNode;
}

class Class extends React.Component<Props> {
  value: any;

  state = {
    time: '',
  };

  getDate() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const hour = String(date.getHours());
    const minute = String(date.getMinutes());
    const second = String(date.getSeconds());

    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초`;
  }

  componentDidMount() {
    this.value = setInterval(() => {
      this.setState({ time: `${this.getDate()}` });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.value);
  }

  render() {
    return (
      <>
        <h2>클래스형 컴포넌트</h2>
        <h4>시간출력 : {this.state.time}</h4>
        <h4>
          Props : {this.props.name} , {this.props.num}
        </h4>
        <div>
          <h4>wrapper :</h4> {this.props.children}
        </div>
      </>
    );
  }
}

export default Class;
