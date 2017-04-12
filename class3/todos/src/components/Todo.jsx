import React from 'react';

/*class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      todo: props.todo
    };
  }
  render() {
    return (<li className="list-group-item">
      {this.state.todo.title}&nbsp;
      <i className="glyphicon glyphicon-user"></i><span className="label label-default">{this.state.todo.author}</span>
      <i className="glyphicon glyphicon-resize-horizontal"></i><span className="label label-info">{this.state.todo.asigne}</span>
      <span className="badge">{this.state.todo.timer}</span>
    </li>)
  }
}*/
const Todo =({title, author, asigne, timer, completed, id})=> (<li className={"list-group-item " + (completed?'active':'')}>
      {title}&nbsp;
      <i className="glyphicon glyphicon-user"></i><span className="label label-default">{author}</span>
      <i className="glyphicon glyphicon-resize-horizontal"></i><span className="label label-info">{asigne}</span>
      <span className="badge">{timer}</span>
    </li>)
export default Todo;
