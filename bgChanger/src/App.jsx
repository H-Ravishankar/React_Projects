import { useState } from 'react'
import './App.css'

function App() {
 
const [color, setColor] = useState("Black")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

<div className='fixed flex flex-wrap    justify-center top-12 inset-x-0 px-2'>
         
         <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl shdow-lg'>
        
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1   shadow-lg rounded-3xl text-white'style={{backgroundColor: "green"}}>Green</button>
         
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1   shadow-lg rounded-3xl'style={{backgroundColor: "red"}}>Red</button>
        
          <button onClick={()=>setColor("yellow")}  className='outline-none px-4 py-1   shadow-lg rounded-3xl'style={{backgroundColor: "yellow"}}>Yellow</button>
        
          <button onClick={()=>setColor("blue")}  className='outline-none px-4 py-1   shadow-lg rounded-3xl'style={{backgroundColor: "blue"}}>Blue</button>
         
          <button onClick={()=>setColor("pink")}  className='outline-none px-4 py-1   shadow-lg rounded-3xl'style={{backgroundColor: "pink"}}>Pink</button>
        </div>
      </div>

      
    </div>
  )
}

export default App
