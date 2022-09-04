import React from 'react';
import { Select, Button, DatePicker } from 'antd';
import Header from '@components/Header';
import DataTrend from '@components/DataTrend';

// import axios from 'axios';
import './style.scss';

interface IProps {}

const { Option } = Select;
const IndexPage: React.FC<IProps> = (props) => {
  // componentDidMount() {
  //   axios.get('/ad/index/gray').then((res) => console.log(res.data))
  // .catch((err) => console.log(err));
  // }
  const a = '1';
  return (
    <div className="index-page">
      <div className="head-box">
        <Header />
      </div>
      <div className="content-box">
        <div className="left-content">
          <div className="chart-area">
            <div className="header-box">
              <div className="title">数据趋势</div>
              <div className="select-area">
                <Select
                  defaultValue="0"
                  style={{ width: 120 }}
                  // onChange={this.handlePromotionChange}
                  size="small"
                >
                  <Option value="0">全部推广产品</Option>
                  <Option value="1">搜索推广</Option>
                  <Option value="2">一站式推广</Option>
                  <Option value="3">合约推广</Option>
                  <Option value="4">知识营销</Option>
                </Select>
                <DatePicker
                  // onChange={this.handalDateChange}
                  size="small"
                  style={{ marginLeft: 10 }}
                  placeholder="请选择日期"
                />
              </div>
            </div>
            <DataTrend />
          </div>
        </div>
      </div>
      <div className="foot-box">
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default IndexPage;
