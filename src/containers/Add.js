import React from 'react';


class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text:''
    }
  }
  render() {
    return (
      <div className='add-group'>
        <input type='text' onKeyUp={this.keyUp.bind(this)} 
          // onChange={this.handleChange.bind(this)}  
          ref={input => {this.inputText=input}}  
          />
        <button
          onClick={this.add.bind(this)}>add #{this.props.length + 1}</button>
      </div>
    );
  }
  componentDidMount(){
    this.focus();
  }
  focus(){
    this.inputText.focus()
  }
  //动态绑定
  // handleChange(e) {
  //   this.setState({ text: e.target.value })
  // }
  //添加
  add(){
    if (!this.inputText.value.trim().length) {
      return
    }
    this.props.onHandleAdd(this.inputText.value);
    // this.setState({text:''})
    this.inputText.value='';
    this.focus();
  }
  keyUp(e){
    e.keyCode == 13 && this.add()
  }
}

// AddComponent = connect()(AddComponent)

export default Add
