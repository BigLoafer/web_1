import React, { Component } from 'react';
import './App.css';
import Search from './pages/search.jsx'
import KouBei from './pages/koubei.jsx'
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

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


  render() {
    return (
      <div style={{ position: 'fixed', width: '100%', height: '100%', }} >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="生活"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
          <Search {...this.props}/>
          </TabBar.Item>
          <TabBar.Item
            title="口碑"
            key="Koubei"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
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

