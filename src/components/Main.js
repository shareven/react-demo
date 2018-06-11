require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Add from '../containers/Add';
import Todolist from '../containers/Todolist';





class AppComponent extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      items: [{
        text:'haode',
        id:123,
        isFinished:!1
      }, {
          text: '11',
          id: 1234,
          isFinished:!1
        }, {
          text: '22',
          id: 1235,
          isFinished:!1
        }],
      text: ''
    }
  }
  render() {
    return (
      <div className='index'>
        <h1>todolist</h1>
        
        <Add onHandleAdd={this.handleAdd.bind(this)} length={this.state.items.length}/>
        <Todolist items={ this.state.items } onToggleFinish={this.toggleFinish.bind(this)} onCloseItem={this.closeItem.bind(this)}/>
      
      </div>
    );
  }
  
  //添加
  handleAdd(item){
    
    let newItem = {
      text: item,
      id: Date.now()
    }
    this.setState(prevState =>({
      items: prevState.items.concat(newItem),
      text: ''
    }))
    
  }
  
  //删除
  closeItem(item) {
    let idd =item.id;
    this.setState(prevState => ({
      items: prevState.items.filter(v => idd != v.id)
    }));
  }
  //完成
  toggleFinish(item) {
    let idd =item.id;
    this.setState(prevState => ({
      items: prevState.items.map(v => {
        idd == v.id&&(v.isFinished=!v.isFinished);
        return v
      })
    }));
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
