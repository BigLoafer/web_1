import React,{Component} from 'react';
import {NavBar,Toast,Icon} from 'antd-mobile';

export default class KouBei extends Component{


    back=()=>{
        Toast.info('返回');
    };

    render(){
        return(
            <div>
                <h1>口碑啊啊</h1>
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