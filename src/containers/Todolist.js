import React from 'react';


let Todolist = () => {
  return (
    <div className="list-group" >
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
// class Todolist extends React.Component {
//   render(){
//     return (
//       <div className="list-group" >
//         <ul>
//           {this.props.items.map((item) => (
//             <li key={item.id}>{item.text}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
// AddComponent = connect()(AddComponent)

export default Todolist
