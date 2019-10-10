import React from 'react';
import './App.css';

import TabsComponent from './components/TabsComponent';
import Content from './components/Content';
import users from './data/users.js';

class App extends React.Component {
  state = {
    activeTab: 1
  }

  onTabClick = (event) => {
    if(this.state.activeTab === +event.target.innerHTML.slice(4, event.target.innerHTML.length)) return
    this.setState({activeTab: +event.target.innerHTML.slice(4, event.target.innerHTML.length)})
  }

  renderSwitch = (param) => {
    let ContentWrapper = () => (
      <div className="content">
        <Content users={users[param - 1]}/>
      </div>
    )
    switch (param) {
      case 1:
        return (
          <ContentWrapper />
        )
      case 2:
        return (
          <ContentWrapper />
        )
      case 3:
        return (
          <ContentWrapper />
        )
      case 4:
        return (
          <ContentWrapper />
        )
      default: 
          break;
    }
  }

  render() {
    let { activeTab } = this.state;
    return (
      <div className="App">
        <TabsComponent onTabClick={this.onTabClick.bind(this)} activeTab={activeTab}/>
        {this.renderSwitch(activeTab)}
      </div>
    );
  }
}

export default App;
