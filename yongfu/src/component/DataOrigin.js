import React, { Component } from 'react';
export default class Header extends Component{
  render(){
    return(
      <div className="data-origin" id="dataOrigin">
        <h2>数据源</h2>
        <ul className="content">
          <li className="data-item">
            <h4>市场数据服务商</h4>
            <p>wind</p>
            <p>恒生源聚</p>
            <p>CEFTS</p>
            <p>Reuters</p>
          </li>
          <li className="data-item">
            <h4>业务系统</h4>
            <p>CPM系统</p>
            <p>营销管理系统</p>
            <p>网厅系统</p>
            <p>理财系统</p>
          </li>
          <li className="data-item">
            <h4>交易系统</h4>
            <p>柜台交易</p>
            <p>Comstar</p>
            <p>Quantum/Xund</p>
            <p>黄金系统Dimole</p>
          </li>
          <li className="data-item">
            <h4>第三方DMP</h4>
            <p>银联</p>
            <p>同盾</p>
            <p>天行、优分数据</p>
            <p>数据魔盒</p>
          </li>
          <li className="data-item">
            <h4>手工台账</h4>
            <p>市场数据</p>
            <p>交易数据</p>
            <p>衍生数据</p>
            <p>...</p>
          </li>
        </ul>
      </div>
    )
  }
} 