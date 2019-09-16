import React, { Component } from 'react';
import jiagou from '../image/jiagou.png';
export default class Header extends Component {
  render() {
    return (
      <div className="data-exchange" id="dataExchange">
        <h2 className="title">数据交换平台</h2>
        <div className="wrap-img">
          <span>ETL1-数据源处理</span>
          <span>ETL2-基础数据存储处理</span>
          <span>ETL3-输出数据加工处理</span>
          <span>发送管理</span>
          <span>ETL4-输出计算结果处理</span>
          <img src={jiagou} alt=""/>
        </div>
      </div>
    )
  }
} 