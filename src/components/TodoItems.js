import React, { useState } from 'react'
const TodoItems = ({AddTodos}) => {
  const[tittle,SetTittle]=useState('');
  const[desc,SetDesc]=useState('');
  const AddTodo=(event)=>{
    event.preventDefault();
    if(!tittle||!desc){
      alert('tittle and description should not be empty');
    }
    else{

      AddTodos(tittle,desc);
      SetTittle('');
      SetDesc('');

    }
  }
  return (
    <div className='container'>
      <h1 className='heading'>TO-DO-ITEMS</h1>
      <form className='form'>
       
        <label >Enter Tittle</label>
        <input type='text' id='tittle' className='input' value={tittle} onChange={(e)=>{SetTittle(e.target.value)}} ></input>
        <label >Enter Description</label>
        <input type='text' id='Desp' className='input' value={desc} onChange={(e)=>{SetDesc(e.target.value)}}></input>
        <button type='submit' className='submit-btn' onClick={AddTodo}>submit</button>
      </form>
    </div>
  )
}

export default TodoItems
