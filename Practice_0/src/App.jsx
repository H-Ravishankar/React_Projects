import { useEffect, useState } from 'react'
import { Todo } from './Components/Todo'
import './App.css'
let count = 4
function App() {
  const [users, setUser] = useState([])

useEffect(()=>{
 
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{ return res.json()
      }).then((res)=>setUser(res))

},[])


  return (
    <>
      {/* <button onClick={()=>{
        setTodos([...todos,{
          id: count ++,
          title : Math.random(),
          description: Math.random()
        }])
      }}>Add Todo</button>
      */}

      {users.map((user)=>{
        return <Todo key={user.id}name={user.name} username={user.username}></Todo>
      })} 
    </>
  )
}

export default App
