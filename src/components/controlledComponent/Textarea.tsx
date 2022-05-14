import { useState } from 'react';
import React from 'react';

class Textarea extends React.Component {
  state = {
    value: '',
    upperCase: '',
    lowerCase: '',
  };

  handleChange = (e: any) => {
    this.setState({ value: e.target.value });
    this.setState({ upperCase: e.target.value.toUpperCase() });
    this.setState({ lowerCase: e.target.value.toLowerCase() });

    // setState 는 비동기적으로 실행된다
    //   setState호출 덕분에 React는 state가 변경된 것을 인지하고
    //   화면에 표시될 내용을 알아내기 위해 render()메서드를 다시 호출한다
  };

  handleSubmit = (e: any) => {
    alert(this.state.value);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.handleChange} />
          <textarea value={this.state.upperCase} />
          <textarea value={this.state.lowerCase} />

          <button type="submit">click</button>
        </form>
      </div>
    );
  }
}

export default Textarea;
