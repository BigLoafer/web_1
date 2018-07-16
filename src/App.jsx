import React, { Component } from 'react';
import './App.css';
import KouBei from './pages/koubei.jsx'
import HomeScreen from './pages/HomeScreen';
import { TabBar } from 'antd-mobile';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      hidden: false,
      selectedTab: "blueTab"
    }
  }

  componentDidMount() {
    window.onscroll = (event) => {
      console.log('app');
      let realHeight = document.documentElement.scrollTop || document.body.scrollTop;
      let op = 0.8 * (realHeight / 142);
      if (op < 0.8) {
        this.setState({
          bg: `rgba(234, 44, 44, ${op})`
        });
      }
    };
  };


  renderBottomPic=(picPath)=>{
    return(
      <div style={{
        width: '22px',
        height: '22px',
        background: `url(${picPath}) center center /  21px 21px no-repeat`
      }}
      />
    ); 
  };

  render() {
    
    return (
      <div style={{ position: 'fixed', width: '100%', height: '100%', }} >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={this.renderBottomPic("https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg")}
            selectedIcon={this.renderBottomPic('https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg')}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
          <HomeScreen {...this.props}/>
          </TabBar.Item>
          <TabBar.Item
            title="我的"
            key="Koubei"
            icon={this.renderBottomPic("https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg")}
            selectedIcon={this.renderBottomPic('https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg')}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <KouBei />
          </TabBar.Item>

        </TabBar>

      </div>
    );
  }
}

