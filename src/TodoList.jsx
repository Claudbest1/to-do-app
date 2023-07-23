import React, { useState } from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'
import {FaEdit} from 'react-icons/fa'
import {BsFillTrashFill} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { completeTodo, deleteTodo } from './redux/todo/todoSlice'

const TodoList = ({setEdit}) => {

    const [input, setInput] = useState("")
    const { todos } = useSelector((state) => state.todos)
    const dispatch = useDispatch()


    const handleEdit = (id) => {        
        const findTodo = todos.find((todo) => todo.id === id)   
        // setInput(findTodo)
      if (findTodo.completed === true) return 
      setEdit(findTodo)
    
      
    }

    
  return (
      <div>
          {todos.map((todo) => (
              <li className='flex mt-5 border-2 justify-between border-sky-700 rounded-md p-2 h-max-[30px]'
                  key={todo.id}>
                  <input type="text"
                      value={todo.title}
                      className={`bg-transparent text-white text-[16px] pl-2 m-15 w-[280px] border-0 ${todo.completed ? "line-through decoration-solid decoration-slate-50 opacity-60" : " "}`}
                      onChange={(event) => event.preventDefault()}
                      />
                  <div className='flex gap-3'>
                      <button className='' onClick={() => dispatch(completeTodo(todo.id))}>
                    <BsCheckCircleFill className='text-green-500'/>  
                  </button>
                  <button className='' onClick={() => handleEdit(todo.id)}>
                    <FaEdit className='text-orange-500'/>  
                  </button>
                  <button className='' onClick = {() => dispatch(deleteTodo(todo.id))}>
                    <BsFillTrashFill className='text-cyan-500'/>  
                  </button>
                  </div>
                  
              </li>
             
          ))}
    </div>
  )
}

export default TodoList