import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl text-center font-semibold text-xl m-5'>Tailwind CSS</h1>

     <Card userName="Max" btnText="Click Me"/>
     <Card userName="Danny"/>

   
    </>
  )
}

export default App
