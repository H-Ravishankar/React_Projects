import { useState } from "react"
import {useDispatch} from 'react-redux'
import{addTodo} from '../features/todo/todoSlice'


export function AddTodo(){
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
   }
   
    return (
        <div> 
            <form onSubmit={addTodoHandler}>
            <input type="text" placeholder="Enter a todo" value={input} onChange={(e)=>setInput(e.target.value)} />

            <button type="submit">submit</button>
            </form>
        </div>
    )
}