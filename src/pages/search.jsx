import React, { Component } from 'react';
import './search.scss';
import { Toast,Button } from 'antd-mobile';
import {  Link } from 'react-router-dom';

export default class Search extends Component {

    constructor() {
        super();
        this.state = {
            bg: 'transparent'
        }
    }

    componentDidMount() {

        window.onscroll = (event) => {
            let realHeight = document.documentElement.scrollTop || document.body.scrollTop;
            let op = 0.8 * (realHeight / 142);
            if (op < 0.8) {
                this.setState({
                    bg: `rgba(234, 44, 44, ${op})`
                });
            }
        };
    }

    login = () => {
        Toast.loading("登录")
    };


    goToTest=()=>{
        this.props.history.push({pathname:'/test', state:{name:'nieqian',age:'23'}});
    }
    render() {
        
        return (
            <div className='con'>
                <div className='search' style={{ backgroundColor: this.props.bg }}>
                    <img className='img' src={require('../images/2.jpg')} alt="test" />
                    <div className='searchCon'>
                        <form className='form'>
                            <input className='input' type="text" placeholder='请输入搜索关键字' />
                        </form>
                    </div>
                    <span className='login' onClick={this.login}>登录</span>
                    <span className='login'>登录</span>
                </div>
               <Button onClick={this.goToTest}>start111</Button>
            </div>
        );
    }

}