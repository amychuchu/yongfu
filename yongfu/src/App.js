import React, { Component } from 'react';
import $ from 'jquery';
import Header from './component/Header'
import Banner from './component/Banner'
import Aplication from './component/Aplication'
import BigData from './component/BigData'
import DataExchange from './component/DataExchange'
import DataOrigin from './component/DataOrigin'
import Footer from './component/Footer'
import './style/index.less';

class App extends Component {
  move=(name)=>{
    let top = $(name).offset().top;
    $('html,body').animate({
      scrollTop: top-60
    }, 800);
  }
  render() {
    return (
      <div className="container">
        <Header move={this.move}/>
        <Banner/>
        <Aplication/>
        <BigData/>
        <DataExchange/>
        <DataOrigin/>
        <Footer/>
      </div>
    );
  }
}

export default App;
