import React from 'react';
import './style.scss';

interface IProps {}

class App extends React.Component<IProps> {
  render() {
    return (
      <div style={{ color: 'blue' }} className="box">
        Hello React
        <span>I am Jack.</span>
      </div>
    );
  }
}

export default App;
