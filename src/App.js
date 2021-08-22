import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context';
import { classes } from 'istanbul-lib-coverage';
import AddTodo from './Todo/AddTodo';

function App() {
  const [todos, setTodos] = React.useState([
  {id:1, complited:true, title:'gavno'},
  {id:2, complited:false, title:'debic'},
  {id:3, complited:false, title:'Buy pass'}
  ]);

function toggleTodo(id){
  setTodos(todos.map(todo =>{
    if (todo.id ===id){
      todo.complited = !todo.complited
    }
    return todo
  }))
}
function removeTodo(id){
  setTodos(todos.filter(todo => todo.id != id))
}
function addTodo(title){
  setTodos(todos.concat([{
    title,
    id:Date.now(),
    complited:false
  }]))
}

  return (
    <Context.Provider value={{removeTodo}}>
   <div className="wrapper">
      <h1>ToDoList</h1>
      <AddTodo onCreate={addTodo}/>
      {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>No Tasks</p>}
      
   </div>
   </Context.Provider>
  );
}

export default App;
