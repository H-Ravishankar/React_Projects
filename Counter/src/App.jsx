import { useState } from 'react'
import './App.css'

function App() {
 
  let [counter,setCounter] = useState(5)
  
  //let counter = 5
 
  const addValue = ()=>{
    setCounter(counter+1)
  }
  
  const removeValue = ()=>{
    if(counter > 0){
      setCounter(counter-1)
    }else{
      alert('OOPS ! something went wrong')
    }
   
  }

  return (
    <>
      <h2>Counter Values: {counter} </h2>


      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
