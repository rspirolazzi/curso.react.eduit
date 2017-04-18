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
const TodoInput =({id, handleNewTodo})=>{
  //console.log(handleNewTodo);
  return(<li className={"list-group-item "}>
      <form className="form-inline" id={"form-todo-"+id} onSubmit={(e)=>{handleNewTodo(e,id)}}>
      <input placeholder="Ingrese una tarea" className="form-control input-lg" type="text" name="title" id="title"/>
      <input placeholder="Autor" className="form-control input-lg" type="text" name="author" id="author"/>
      <input placeholder="Asignado" className="form-control input-lg" type="text" name="asigne" id="asigne"/>
      <button type="submit" className="btn btn-success btn-lg"><i className="glyphicon glyphicon-ok"></i></button>
    </form></li>)}
export default TodoInput;
