import React from 'react';

interface IProps {}

class IndexPage extends React.Component<IProps> {
  render() {
    return (
      <div style={{ color: 'blue' }} className="box">
        首页
      </div>
    );
  }
}

export default IndexPage;
