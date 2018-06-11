import React from 'react';


class Todolist extends React.Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    return (
      <div className='list-group' >
        <ul>
          {this.props.items.map((item) => (
            <li key={item.id}>
              <a className={item.isFinished ? 'finished' : 'finish'} onClick={this.props.onToggleFinish.bind(this, item)} >V</a>
              <a className='close' onClick={this.props.onCloseItem.bind(this, item)} >X</a>

              <span style={{ textDecoration: item.isFinished ? 'line-through' : 'none' }}>{item.text}</span>
             
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
// AddComponent = connect()(AddComponent)

export default Todolist
