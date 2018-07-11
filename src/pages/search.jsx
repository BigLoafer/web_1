import React,{Component} from 'react';
import './search.css';

export default class Search extends Component{

    constructor(){
        super();
        this.state={
            bg:'transparent'
        }
    }

    componentDidMount(){
        window.onscroll=(event)=>{
                let realHeight=document.documentElement.scrollTop||document.body.scrollTop;
                let op=0.8*(realHeight/142);
                if(op<0.8){
                    this.setState({
                        //bg: rgba(234, 44, 44, `${op}`),
                        bg:'red'
                    });
                }
        };
    }


    render(){
        return(
            <div className='con' style={{backgroundColor:this.state.bg}}>
                <img className='img' src={require('../images/1.jpg')} alt="test"/>        
                <form className='form'>
                    <input type="text" placeholder='请输入搜索关键字'/>
                </form>
                <span className='login'>登录</span>
                <span className='login'>登录</span>

            </div>
        );
    }
    
}