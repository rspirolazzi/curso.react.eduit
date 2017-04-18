import React from 'react';
import Todo from './Todo.jsx'
import TodoInput from './TodoInput.jsx'

/*class Todos extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      todos: props.todos
    };
  }
  render() {
    return (<div>
      <ul className="list-group">
      {this.state.todos.map(todo=>(
        <Todo key={todo.id} {...todo}/>
      ))}
    </ul></div>)
  }
}*/
const Todos = ({todos, id, handleNewTodo, handleRemoveTodoItem, handleCheckTodo})=>{
  //console.log(handleNewTodo);
  return (<div>
    <TodoInput id={id} handleNewTodo={handleNewTodo}/>
    <table className="table table-stripped">
    <thead>
    <tr>
    <th></th>
    <th>Tarea</th>
    <th>Autor</th>
    <th>Asignado</th>
    <th>Tiempo en segundos</th>
    <th></th>
    </tr>
    </thead>
    <tbody>
    {todos.map(todo=>(
      <Todo key={todo.id} {...todo} handleRemoveTodoItem={handleRemoveTodoItem} handleCheckTodo={handleCheckTodo}/>
    ))}
    </tbody>
  </table></div>)}
export default Todos;
