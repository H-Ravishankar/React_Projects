import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(1)
  
  
  return (
    <>
    <button onClick={()=>{
      setCount(1)
    }}>1</button>
    <button  onClick={()=>{
      setCount(2)
    }}>2</button>
    <button  onClick={()=>{
      setCount(3)
    }}>3</button>
    <button  onClick={()=>{
      setCount(4)
    }}>4</button>
    <Todo id={count} ></Todo>
    <button>5</button>
    </>
  )
}

function Todo({id}){
  const [todo, setTodo] = useState({});
  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todo?id="+ id)
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      //  console.log(res)
      //  console.log( "hey"+res.todo.title)
      //  console.log( "hey"+res.todo.description)
        setTodo(res)
        console.log(setTodo(res))
        console.log( "hey"+ res.todo.title)
    })
  },[id])
    return <>
   
     <h3>{id}</h3>
     <h1>
      {todo.title}
      </h1>
     <h3>{todo.description}</h3>
    
     
    </>
    
  }

export default App
