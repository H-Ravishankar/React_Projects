import { useState } from 'react'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'
import { UpdateName } from './Components/UpdateName'
import { Header } from './Components/UpdateName'
function App() {
  

  return (
    <>
     {/* <CreateTodo></CreateTodo>
     <Todos todos={[
      {
        title: "Go to gym ",
        description: "Go to gym in morninng",
        completed: false
      },
      {
        title: "Go to school ",
        description: "Go to school in morninng",
        completed: true
      },
      {
        title: "Go to office ",
        description: "Go to office in morninng",
        completed: true
      }
     ]}></Todos> */}
    <UpdateName></UpdateName>
    <Header title="Hey There"></Header>
    
   </>

  
 
  )
}

export default App
