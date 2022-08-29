import React from 'react';
import { Button } from 'antd';
import './style.scss';

interface IProps {}

class IndexPage extends React.Component<IProps> {
  render() {
    return (
      <div className="index-page">
        <div className="middle-box">
          首页
          <Button type="primary">测试</Button>
        </div>
      </div>
    );
  }
}

export default IndexPage;
