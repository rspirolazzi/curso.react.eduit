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
        createdAt:new Date(),
      };
      break;
    default:
      return state;
      break;
  }
}

const todos = (state=[], action)=>{
  switch (action.type) {
    case 'REMOVE_TODO':
      //console.log('REMOVE_TODO=>', action, state);
      return [...state.filter(todo=>{
        if(todo.id !== action.id){
          return todo;
        }
      })];
      break;
    case 'CHECKED_TODO':
      return [...state.filter(todo=>{
        if(todo.id === action.id){
          todo.completed = action.checked;
          if(todo.completed){
            var today = new Date();
            var dif = today.getTime() - todo.createdAt.getTime();

            var seconds_diff = dif / 1000;
            var seconds = Math.floor(seconds_diff);
            todo.timer = seconds;
          }else{
            todo.timer = 0;
          }
        }
        return todo;
      })];
      break;
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
    case 'CHECKED_TODO':
      return [...state.map(todosList=>{
        todosList.todos = [...todos(todosList.todos, action)];
        var completed = todosList.todos.filter(todo=>{
          if(todo.completed==false){
            return todo
          }
        }).length==0
        if(completed){
          todosList.completed = true;
        }else{
          todosList.completed = false;
        }
        return todosList;
      })];
      break;
    case 'REMOVE_TODO_LIST':
      return [...state.filter(todosList=>{
        if(todosList.id !== action.id){
          return todosList;
        }
      })];
      break;
    case 'REMOVE_TODO':
      return [...state.map(todosList=>{
        todosList.todos = [...todos(todosList.todos, action)];
        return todosList;
      })];
      break;
    case 'ADD_TODOS_LIST':
      return [...state, todos(null, action)];
      break;
    case 'ADD_TODO':
      return state.map(todosList=>{
        if(todosList.id === action.id){
          todosList.completed = false;
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
