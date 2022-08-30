import React from 'react';
import { Button } from 'antd';
import axios from 'axios';
import './style.scss';

interface IProps {}

class IndexPage extends React.Component<IProps> {
  componentDidMount() {
    axios.get('/ad/index/gray').then((res) => console.log(res.data)).catch((err) => console.log(err));
  }

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
