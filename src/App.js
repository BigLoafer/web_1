import React, { Component } from 'react';
import './App.css';
import Search from './pages/search.jsx'

 export default class App extends Component {

  constructor(){
    super();
    this.state={
      bg:'transparent'
    }
  }

  componentDidMount(){
    window.onscroll=(event)=>{
          console.log('app');
          let realHeight=document.documentElement.scrollTop||document.body.scrollTop;
          let op=0.8*(realHeight/142);
          if(op<0.8){
              this.setState({
                  bg: `rgba(234, 44, 44, ${op})`
              });
          }
    };
  };

  render() {
    return (
      <div className="App" >
          <Search  bg={this.state.bg}/>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
          <h1>ccc</h1>
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

