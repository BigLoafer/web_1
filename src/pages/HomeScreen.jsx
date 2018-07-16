import React,{Component} from 'react';
import Search from './search';
import '../css/HomeScreen.css';

export default class HomeScreen extends Component{

    render(){
        return(
            <div style={{display:'flex',flexDirection:'column',flex:1}}>
                <Search {...this.props}/>
                <div style={{display:'flex',flexDirection:'row',marginTop:10}}>
                    <span style={{marginLeft:20,color:'black',fontSize:15}}>商品名:</span>
                    <span style={{marginLeft:20}}>测试测试测试测试测试</span>
                </div>
                <div style={{display:'flex',flexDirection:'row',marginTop:10}}>
                    <span style={{marginLeft:20,color:'black',fontSize:15}}>商品名:</span>
                    <span style={{marginLeft:20}}>测试测试测试测试测试</span>
                </div>
                <div style={{display:'flex',flexDirection:'row',marginTop:10}}>
                    <span style={{marginLeft:20,color:'black',fontSize:15}}>商品名:</span>
                    <span style={{marginLeft:20}}>测试测试测试测试测试</span>
                </div>
                <div style={{display:'flex',flexDirection:'row',marginTop:10}}>
                    <span style={{marginLeft:20,color:'black',fontSize:15}}>商品名:</span>
                    <span style={{marginLeft:20}}>测试测试测试测试测试</span>
                </div>
                <div style={{display:'flex',flexDirection:'row',marginTop:10}}>
                    <span style={{marginLeft:20,color:'black',fontSize:15}}>商品名:</span>
                    <span style={{marginLeft:20}}>测试测试测试测试测试</span>
                </div>
               
            </div>
        );
    }
}