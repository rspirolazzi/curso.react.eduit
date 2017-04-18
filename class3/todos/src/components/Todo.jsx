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
const AuthorHtml = ({author})=> (<span className="label label-default">{author}</span>);
const AsigneHtml = ({asigne})=> (<span className="label label-info">{asigne}</span>);
const Todo =({title, author, asigne, timer, completed, id, handleRemoveTodoItem, handleCheckTodo}) => {
  var authorHtml, asigneHtml

  if(author && author != 'N/A'){
    authorHtml = <AuthorHtml author={author}/>;
  }
  if(asigne && asigne != 'N/A'){
    asigneHtml = <AsigneHtml asigne={asigne}/>;
  }
  return (<tr className={"" + (completed?'success':'')}>
      <td><input onClick={e=>handleCheckTodo(e,id)} type="checkbox" id={"checkbox-"+id}/></td>
      <td><label htmlFor={"checkbox-"+id}>{title}</label></td>
      <td>{authorHtml}</td>
      <td>{asigneHtml}</td>
      <td><span><i className="glyphicon glyphicon-time"></i>{timer}</span></td>
      <td><a href="#" onClick={(e) => handleRemoveTodoItem(e, id)} className="btn-xs btn-danger"><i className="glyphicon glyphicon-remove"></i></a></td>
    </tr>)}
export default Todo;
