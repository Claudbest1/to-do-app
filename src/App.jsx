import React from 'react'
import Home from './Home'
import Form from './Form'
import { useState, useEffect } from 'react'
import TodoList from './TodoList.jsx'


const App = () => {

//   const initialState = JSON.parse(localStorage.getItem("todos")) ||[]
  const [input, setInput] = useState ("")
//   const [todos, setTodos] = useState(initialState)
  const [edit, setEdit] = useState(null)

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos))
//   }, [todos])
  return (
    <div className='bg-yellow-450 h-screen flex justify-center items-center text-xl shadow-lg'>
      <div
        className='bg-cyan-950 w-[450px] shadow-lg rounded-md overflow-hidden flex-col justify-center text-white text-center p-5 min-h-min'>
        <Home />
        <div>
          <Form
                      edit={edit}
                      setEdit={setEdit}
                  />
        </div>
              <div>
                  <TodoList setInput={setInput} setEdit={setEdit}/>
          {/* <TodoList setInput={todos} setTodos={setTodos} setEditTodo={setEditTodo} /> */}
        </div>
        
      </div>
      
     </div>
  )
}

export default App