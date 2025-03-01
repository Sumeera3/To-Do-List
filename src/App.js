import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';
import './App.css';
import { useEffect, useState } from 'react';
import './styling/TodoItem.css';
import './styling/TodoList.css';

function App() {
  let prevTodos;
  if(localStorage.getItem('Data')==undefined){
    prevTodos=[]
  }
  else{
    prevTodos=JSON.parse(localStorage.getItem('Data'));
  }

  const [todos,SetTodos]=useState(prevTodos);
  let id;
  const AddTodos=(tittle,Desc)=>{
    if (todos.length==0){
      id=0;
    }
    else{
      id=todos[todos.length-1].id+1;
      
    }
      const MyTodo=
        {
          id:id,
          tittle:tittle,
          Desc:Desc

        }
      
      SetTodos([...todos,MyTodo])
      

  }
  useEffect(()=>{
    localStorage.setItem('Data',JSON.stringify([...todos]));
},[todos])

const Delete=(e)=>{
  SetTodos(todos.filter((value)=>{
      return (e.target.id!=value.id)
  }))
}
  return (
   <>
    <TodoItems AddTodos={AddTodos}/>
    <TodoList todos={todos} Delete={Delete}/>
   </>
  );
}

export default App;
