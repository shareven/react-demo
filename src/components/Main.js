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
      <div className="list-group" >
        <ul>
          {this.props.items.map((item) => (
            <li key={item.id}>
              <a className="finish" onClick={this.finish.bind(this,item)} >V</a>
              <a className="close" onClick={this.close.bind(this,item)} >X</a>

              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  close(item){
    this.props.onCloseItem(item);
  }
  finish(item){
    console.log('data');
    
  }
}
class Add extends React.Component {
  render() {
    return (
      <div className="add-group">
        <input type="text" />
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
        id:123
      }, {
          text: '11',
          id: 1234
        }, {
          text: '22',
          id: 1235
        }],
      text: ''
    }
  }
  render() {
    return (
      <div className='index'>
        <h1>todolist</h1>
        <div className="add-group">
          <input type="text" onKeyUp={this.keyUp.bind(this)}
          onChange= {this.handleChange.bind(this)} value={ this.state.text }/>
          <button 
          onClick= {this.handleAdd.bind(this)}>add #{this.state.items.length+1}</button>
        </div>
        <Todolist items={ this.state.items } onCloseItem={this.closeItem.bind(this)}/>
      
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
      // items: prevState.items.map(v => item.id != v.id)
      items: prevState.items.splice(prevState.items.findIndex(v => idd = v.id),1)
    }));
   
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
