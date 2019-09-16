import React, { Component } from 'react';
export default class Header extends Component {
  smooth = (e) => {
    this.props.move(e.target.hash)
  }
  render() {
    return (
      <div className="header">
        <div className="fixed-width">
          <ul className="menu">
            <li><a className="active" href="#banner" onClick={this.smooth}>首页</a></li>
            <li><a href="#aplication" onClick={this.smooth}>应用场景</a></li>
            <li><a href="#bigData" onClick={this.smooth}>核心数据超市</a></li>
            <li><a href="#dataExchange" onClick={this.smooth}>数据交换平台</a></li>
            <li><a href="#dataOrigin" onClick={this.smooth}>数据源</a></li>
          </ul>
        </div>
      </div>
    )
  }
} 