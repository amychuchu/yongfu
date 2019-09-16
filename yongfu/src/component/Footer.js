import React, { Component } from 'react';
export default class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <div className="text">
          <div className="text-left">
            <p>中国.上海 浦东新区芳甸路1088号</p>
            <p>传真号码：021-50923827</p>
            <p>公司网址：http://www.gjyf.com.cn/</p>
            <p>电子邮箱：gjyf@163.com</p>
          </div>
          <div className="text-right">
            <p><a>公司简介</a>|<a>企业荣誉</a>|<a>联系我们</a></p>
            <p>@国金涌富资产管理有限公司2016 All Rights</p>
          </div>
         
        </div>
        <div className="right">

        </div>
      </div>
    )
  }
}