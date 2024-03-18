import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const countries = [
    {id:"1",name: "India"},
    {id: "2", name: "Usa"}
  ]

  const states = [
    {id: "1",countryId:"1",name:"Karnataka"},
    {id: "2",countryId:"1",name:"Mharashtra"},
    {id: "3",countryId:"2",name:"Texas"},
    {id: "4",countryId:"2",name:"California"}
  ]
  const [country, setCountry] = useState([])
  const [state, setState] = useState([])
  
  useEffect(()=>{
      setCountry(countries)
  },[])
  const handleCountry = (id)=>{
    const dt = states.filter(x => x.countryId ===id);
    setState(dt)
  }
  return (
    <>
     <select onChange={(e)=>handleCountry(e.target.value)}>
      <option value="0">Select Country</option>
        {country.map((ctr, index)=>{
          return (
             <option key={index} value="{ctr.id}">{ctr.name}</option>
          )
        })}
      </select >
      <br />
      <select >
      <option value="0">Select State</option>
        {state.map((str, index)=>{
          return (
             <option key={index} value="{str.id}">{str.name}</option>
          )
        })}
      </select>
    </>
  )
}

export default App
