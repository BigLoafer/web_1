import React,{Component} from 'react';
import {NavBar,Toast,Icon} from 'antd-mobile';
import PropTypes from 'prop-types';

export default class TestPager extends Component{

    static contextTypes = {
        router: PropTypes.object.isRequired
      };

      back=()=>{
        this.context.router.history.goBack();
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
        </div>
        );
    }
}