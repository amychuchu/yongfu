import React, { Component } from 'react';
import $ from 'jquery';
import icon1 from '../image/1.png';
import icon2 from '../image/2.png';
import icon3 from '../image/3.png';
import icon4 from '../image/4.png';
import icon5 from '../image/5.png';
import icon6 from '../image/6.png';

export default class Header extends Component {
  
  componentDidMount(){
    $('.engine').addClass("fadeIn");
    setTimeout(()=>{
      $('.tag-item').addClass('fadeIn')
    }, 400)
    setTimeout(() => {
      $('.wrap-1').addClass('fadeIn')
    }, 800)
  }
  render() {
    return (
      <div className="big-data" id="bigData">
        <h2 className="title">核心数据超市</h2>
        <ul className="tag-item">
          <li>产品评价服务</li>
          <li>个性化处理1</li>
          <li>资产配置服务</li>
          <li>客户管理服务</li>
          <li>智能规划服务</li>
          <li>报告输出服务</li>
          <li>交易服务</li>
        </ul>
        <div className="engine">
          <span className="tag">核心引擎</span>
          <ul className="wrap">
            <li className="engine-item">
              <img src={icon1} alt=""/>
              <span className="int-cont">风险分析引擎GJYF-RAE</span>
              <span className="tag-bottom">市场数据</span>
            </li>
            <li className="engine-item">
              <img src={icon2} alt=""/>
              <span className="int-cont">资产配置引擎GJYF-AAE</span>
              <span className="tag-top">系统数据</span>
              <span className="tag-bottom">参考数据</span>
            </li>
            <li className="engine-item">
              <img src={icon3} alt=""/>
              <span className="int-cont">投资绩效分析引擎GJYF-IPE</span>
              <span className="tag-bottom">交易数据</span>
            </li>
            <li className="engine-item">
              <img src={icon4} alt=""/>
              <span className="int-cont">用户画像引擎GJYF-UPE</span>
              <span className="tag-top">历史数据</span>
              <span className="tag-bottom">客户数据</span>
            </li>
            <li className="engine-item">
              <img src={icon5} alt=""/>
              <span className="int-cont">AI引擎GJYF-AIE</span>
              <span className="tag-bottom">产品数据</span>
            </li>
            <li className="engine-item">
              <img src={icon6} />
              <span className="int-cont">工作流引擎GJYF-WFE</span>
            </li>
          </ul>
        </div>
          <ul className="wrap-1">
            <li className="block-item">
              <div className="decorate">
                <div className="left"></div>
                <div className="right"></div>
              </div>
              <span>市场</span>
            </li>
            <li className="block-item">
              <div className="decorate">
                <div className="left"></div>
                <div className="right"></div>
              </div>
              <span>市场</span>
            </li>
            <li className="block-item">
              <div className="decorate">
                <div className="left"></div>
                <div className="right"></div>
              </div>
              <span>参考</span>
            </li>
            <li className="block-item">
              <div className="decorate">
                <div className="left"></div>
                <div className="right"></div>
              </div>
              <span>交易</span>
            </li>
            <li className="block-item">
              <div className="decorate">
                <div className="left"></div>
                <div className="right"></div>
                <div className="right-line"></div>
              </div>
              <span>头寸</span>
            </li>
          </ul>
      </div>
    )
  }
} 