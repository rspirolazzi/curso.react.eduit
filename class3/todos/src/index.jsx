import React from 'react';
import {render} from 'react-dom';
import Todos from './components/Todos.jsx'
import {createStore} from 'redux';
import Reducers from './reducers';

const Store =  createStore(Reducers);

class App extends React.Component {
  constructor(props){
    super(props);
    if(this.state == null || this.state.todosList == null){
      this.state = {todosList : []};
    }
    this.state.todosList << props.todosList;
  }
  addNewTodo(e) {
    var count = $('#myTabs a').length - 1;
    console.log(e.target.title.value);
    e.preventDefault();
    Store.dispatch({type:'ADD_TODOS_LIST', title: e.target.title.value,  icon: e.target.ico.value})
    e.target.title.value = '';
    $('#myTabs a:eq('+count+')').tab('show');
  }
  handleRemove(e, id){
    e.preventDefault();
     Store.dispatch({type:'REMOVE_TODO_LIST', id: id})
  }
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
        <div className="panel-heading"><h3>{todo.title} <i className={"glyphicon glyphicon-"+todo.icon}></i>&nbsp;
        {(todo.completed) ? <span className="label label-success">Completo</span> : <span className="label label-danger">Incompleto</span>}&nbsp;<div className="pull-right"><button onClick={(e) => this.handleRemove(e, todo.id)} className="btn btn-sm "><i className="glyphicon glyphicon-trash"></i></button></div></h3>
        </div>
        <div className="panel-body">
          <Todos key={todo.id} todos={todo.todos}/>
        </div>
      </div>
      </div>
    ))}
      <div key='todo-0' role="tabpanel" className="tab-pane" id="new">
      <form onSubmit={this.addNewTodo.bind(this)}>
      <input id="title" name="title" />
      <input id="ico" name="ico" value='fire' />
      <input type="submit"/>
      </form>
      </div>
    </div>
  </div>)
  }
}
const todosList =[{
  id:0,title:'Lista de super', icon:'shopping-cart', completed:false, todos:[{
    //id:0,
    title: 'Leche',
    completed: false,
    author: 'Rodri',
    asigne: 'Rodri',
    timer: 1000,
  },{
    //id:1,
    title: 'Arroz',
    completed: true,
    author: 'Rodri',
    asigne: 'Cin',
    timer: 2000,
  },],
},{
  id:1,title:'Lista de tares', icon:'fire', completed:true, todos:[{
    //id:2,
    title: 'Hacer pull',
    completed: true,
    author: 'Rodri',
    asigne: 'Rodri',
    timer: 1000,
  },{
    //id:3,
    title: 'Deploy',
    completed: true,
    author: 'Rodri',
    asigne: 'Cin',
    timer: 2000,
  },],
}];
const appRender = state => {
  //console.log(state);
  render(<App todosList={state}/>, document.getElementById('app'));
}

Store.subscribe(()=> {
  //console.log('State changed: ', Store.getState());
  appRender(Store.getState())
});

todosList.map( tl =>
  Store.dispatch({type:'ADD_TODOS_LIST', title: tl.title})
);
todosList.map( tl =>{
  tl.todos.map( todo=>{
    //console.log('Agregando todo: ', todo);
    Store.dispatch({type:'ADD_TODO',
    id:tl.id,
    title: todo.title,
    completed: false,
    author: todo.author,
    asigne: todo.asigne,
    timer: 0,
  });
  });
});
