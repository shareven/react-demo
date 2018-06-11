require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
// import Add from '../containers/Add';
// import Todolist from '../containers/Todolist';


class Todolist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // items: props.items
    }
  }
  render() {
    return (
      <div className='list-group' >
        <ul>
          {this.props.items.map((item) => (
            <li key={item.id}>
              <a className={item.isFinished?'finished':'finish'} onClick={this.props.onToggleFinish.bind(this,item)} >V</a>
              <a className='close' onClick={this.props.onCloseItem.bind(this,item)} >X</a>

              <span style={{textDecoration:item.isFinished?'line-through':'none'}}>{item.text}</span>
              {/* <span style='text-decoration:{'line-through':item.isFinished}'>{item.text}</span> */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
class Add extends React.Component {
  render() {
    return (
      <div className='add-group'>
        <input type='text' />
        <button>add</button>
      </div>
    );
  }
}

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
        <div className='add-group'>
          <input type='text' onKeyUp={this.keyUp.bind(this)}
          onChange= {this.handleChange.bind(this)} value={ this.state.text }/>
          <button 
          onClick= {this.handleAdd.bind(this)}>add #{this.state.items.length+1}</button>
        </div>

        <Todolist items={ this.state.items } onToggleFinish={this.toggleFinish.bind(this)} onCloseItem={this.closeItem.bind(this)}/>
      
      </div>
    );
  }
  //动态绑定
  handleChange(e){
    this.setState({text: e.target.value})
  }
  //添加
  handleAdd(){
    if ( !this.state.text.length){
      return
    }
    let newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(prevState =>({
      items: prevState.items.concat(newItem),
      text: ''
    }))
    
  }
  keyUp(e){
    e.keyCode==13&&this.handleAdd()
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
