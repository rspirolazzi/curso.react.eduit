import React from 'react';
import {render} from 'react-dom';
import Todos from './components/Todos.jsx'

class App extends React.Component {
  render() {
    return (<div id="myTabs">
    <ul className="nav nav-tabs" role="tablist">
      {this.props.todosList.map(todo=>(
        <li key={todo.id} role="presentation"><a href={'#'+todo.id} aria-controls={todo.id} role="tab" data-toggle="tab">{todo.title} <i className={"glyphicon glyphicon-"+todo.icon}></i></a></li>
      ))}
      <li key='todo-0' role="presentation"><a href="#new" aria-controls="new" role="tab" data-toggle="tab"><i className="glyphicon glyphicon-plus"></i></a></li>
    </ul>
    <div className="tab-content">
    {this.props.todosList.map(todo=>(
      <div  key={todo.id} role="tabpanel" className="tab-pane" id={todo.id}>
      <div className="panel panel-default">
        <div className="panel-heading">{todo.title} <i className={"glyphicon glyphicon-"+todo.icon}></i>&nbsp;
        {(todo.completed) ? <span className="label label-success">Completo</span> : <span className="label label-danger">Incompleto</span>}
        </div>
        <div className="panel-body">
          <Todos key={todo.id} todos={todo.todos}/>
        </div>
      </div>
      </div>
    ))}
      <div key='todo-0' role="tabpanel" className="tab-pane" id="new">
      <input/>
      </div>
    </div>
  </div>)
  }
}
const todosList =[{
  id:'todo-1',title:'Lista de super', icon:'shopping-cart', completed:false, todos:[{
    id:'item-1',
    title: 'Leche',
    completed: false,
    author: 'Rodri',
    asigne: 'Rodri',
    timer: 1000,
  },{
    id:'item-2',
    title: 'Arroz',
    completed: true,
    author: 'Rodri',
    asigne: 'Cin',
    timer: 2000,
  },],
},{
  id:'todo-2',title:'Lista de tares', icon:'fire', completed:true, todos:[{
    id:'item-1',
    title: 'Hacer pull',
    completed: true,
    author: 'Rodri',
    asigne: 'Rodri',
    timer: 1000,
  },{
    id:'item-2',
    title: 'Deploy',
    completed: true,
    author: 'Rodri',
    asigne: 'Cin',
    timer: 2000,
  },],
}];
const appRender = ()=>render(<App todosList={todosList} />,
  document.getElementById('app')
);

appRender();
