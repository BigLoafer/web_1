import React, { Component } from 'react';
import './search.css';
import { Toast,Button } from 'antd-mobile';


export default class Search extends Component {

    constructor() {
        super();
        this.state = {
            bg: 'transparent'
        }
       var data= new Array();
        for (let index = 0; index < 100; index++) {
            data.concat(index);
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
                <Button>start</Button>
            </div>
        );
    }

}