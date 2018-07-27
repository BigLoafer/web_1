import React,{Component} from 'react';
import Search from './search.jsx';

export default class HomeScreen extends Component{

    render(){
        return(
            <div style={{display:'flex',flexDirection:'column',flex:1}}>
                <Search {...this.props}/>
                <div style={{display:'flex',flexDirection:'row',marginTop:10}}>
                    <span style={{marginLeft:'15%',color:'black',fontSize:15}}>999:</span>
                    <span style={{marginLeft:"20px"}}>测试测试测试测试测试</span>
                </div>
                <div style={{display:'flex',flexDirection:'row',marginTop:10}}>
                    <span style={{marginLeft:"15%",color:'black',fontSize:15}}>商品名bb333b2:</span>
                    <span style={{marginLeft:20}}>测试测试测试测试测试</span>
                </div>
                <div style={{display:'flex',flexDirection:'row',marginTop:10}}>
                    <span style={{marginLeft:"15%",color:'black',fontSize:15}}>商品名ccc3:</span>
                    <span style={{marginLeft:20}}>测试测试测试测试测试</span>
                </div>
                <div style={{display:'flex',flexDirection:'row',marginTop:10}}>
                    <span style={{marginLeft:"15%",color:'black',fontSize:15}}>商品名4444:</span>
                    <span style={{marginLeft:20}}>测试测试测试测试测试</span>
                </div>
                <div style={{display:'flex',flexDirection:'row',marginTop:10}}>
                    <span style={{marginLeft:"15%",color:'black',fontSize:15}}>商品名5555:</span>
                    <span style={{marginLeft:20}}>测试测试测试测试测试</span>
                </div>
               
            </div>
        );
    }
}