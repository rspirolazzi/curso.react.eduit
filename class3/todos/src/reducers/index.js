let todoId=0;
let todosId=0;
const todo = (state={}, action)=>{
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id:todoId++,
        title:action.title||'Titulo',
        completed: false,
        author: action.author||'N/A',
        asigne: action.asigne||'N/A',
        timer: action.timer||0,
      };
      break;
    default:
      return state;
      break;
  }
}

const todos = (state=[], action)=>{
  switch (action.type) {
    case 'ADD_TODOS_LIST':
      return {
        id:todosId++,
        title:action.title||'Titulo',
        icon:action.icon||'fire',
        completed:false,
        todos:[],
      };
      break;
    case 'ADD_TODO':
      return [...state, todo(null, action)];
      break;
    default:
      return state;
      break;
  }
}

const todosList = (state=[], action)=>{
  //console.log('todosList=>', state, action);
  switch (action.type) {
    case 'REMOVE_TODO_LIST':
      return [...state.filter(todosList=>{
        if(todosList.id !== action.id){
          return todosList;
        }
      })];
      break;
    case 'ADD_TODOS_LIST':
      return [...state, todos(null, action)];
      break;
    case 'ADD_TODO':
      return state.map(todosList=>{
        if(todosList.id === action.id){
          return Object.assign({}, todosList, {todos:todos(todosList.todos, action)});
        }else{
          return todosList;
        }
      });
      break;
    default:
      console.log('NO ACTION');
      return state;
      break;
  }
}
export default todosList;
