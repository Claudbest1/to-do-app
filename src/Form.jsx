import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addTodo, editTodo } from './redux/todo/todoSlice'


const Form = ({edit, setEdit}) => {
  
    const { todos } = useSelector((state) => state.todos)
    const [input, setInput] = useState(edit? edit.title : " ")
    console.log(todos)

    const dispatch = useDispatch() 
    const handleSubmit = (e, id) => {
        e.preventDefault()
        if (edit) {
            dispatch(editTodo({id: edit?.id, title:input}))
        } else {
            dispatch(addTodo({ id: uuidv4(), title: input, completed: false }))
        }
        setInput("")
        setEdit(null)
        
    }
    useEffect(() => {
        setInput(edit?.title)
    },[edit?.title])
  return (
      <form action="" className='flex gap-5 mt-[25px]' onSubmit={handleSubmit}
      >
          <input
              type="text"
              placeholder='Enter a Task...'
              className='bg-gray-700 border-solid border-2 border-sky-700 rounded-lg p-2 text-[16px] w-[325px]'
              value={input}
              required
              onChange={(e) => setInput(e.target.value)}
          />
        
      <button type="submit" className='bg-[#e1af80] hover:bg-[#e1af80]/95 text-white py-2 px-4 rounded'
      >
              {edit? "OK" : "Add"}
      </button>
    </form>
  )
}

export default Form