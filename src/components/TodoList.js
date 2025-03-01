import React from 'react'

const TodoList = ({ todos,Delete}) => {
  return (
    <div>
      <h1 className='heading'>TO-DO-LIST</h1>
      {todos.length>0?
      <>
        {todos.map((value,index) => {
        return(<>
          <div className='todos-box' key={value.id}e>
            <div className='list'>
              <input type='checkbox' className='checkbox'></input>
              <div>
                <h4>{value.tittle}</h4>
                <p>{value.Desc}</p>
                <button className='btn' id={value.id} onClick={(e)=>{Delete(e)}}>Delete</button>
              </div>
            </div>
            <hr></hr>
          </div>
        </>)

      })}
      </>:<p className='Empty-msg'>no todos to display</p>}

    </div >
  )
}

export default TodoList
