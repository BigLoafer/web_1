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
            <h1>传递过来的参数</h1>
            <h1>{this.props.location.state.name}</h1>
            <h1>{this.props.location.state.age}</h1>
        </div>
        );
    }
}