import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],

}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
            // console.log(action)
        },

        completeTodo: (state, action) => {
            let todoIndex = state.todos.findIndex((item) => item.id === action.payload)
            console.log(todoIndex)
            state.todos[todoIndex] = {...state.todos[todoIndex], completed:!state.todos[todoIndex].completed}
            
        },

        editTodo: (state, {payload}) => {
            let todoIndex = state.todos.findIndex((item) => item.id === payload.id)
            state.todos[todoIndex] = {...state.todos[todoIndex], title:payload.title}

        },


        deleteTodo: (state, { payload }) => {
            let sortedTodos = state.todos.filter(item => item.id !== payload)
            state.todos = sortedTodos
        }
    }
})

export const {addTodo, deleteTodo, completeTodo, editTodo} = todoSlice.actions
export default todoSlice.reducer