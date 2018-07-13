import React,{Component} from 'react';
import {NavBar,Icon} from 'antd-mobile';

export default class TestPager extends Component{


      back=()=>{
        this.props.history.goBack();
    };

    render(){
        return(
            <div>
            <NavBar
                mode='light'
                // icon={ <img style={{width:15,height:15}} src={require('../images/2.jpg')}/>}
                icon={<Icon type='left'/>}
                onLeftClick={this.back}
            >
                title
            </NavBar>
            <h1>Test</h1>
        </div>
        );
    }
}