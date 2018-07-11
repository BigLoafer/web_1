import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './pages/search'

 export default class App extends Component {

  constructor(){
    super();
    this.state={
      bg:'transparent'
    };
  }


  componentDidMount(){
    window.onscroll=(event)=>{

    };
  };

  render() {
    return (
      <div className="App" style={{backgroundColor:'#ccc'}}>
          <Search/>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
      </div>
    );
  }
}

