import React from 'react';
import Todo from './Todo.jsx'

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
const Todos = ({todos})=>(<div>
    <ul className="list-group">
    {todos.map(todo=>(
      <Todo key={todo.id} {...todo}/>
    ))}
  </ul></div>)
export default Todos;
