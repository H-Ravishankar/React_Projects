import { useState } from "react"

export function UpdateName(){
    let [title , settitle] = useState("")
    
    function onchange(){
        console.log("onchange clicked")
        settitle(Math.random())
        console.log(Math.random)
    }
    
    return (
        <>
        <button  onClick={onchange}>Update name</button>
        <Header title={title}></Header>
    
        
        </>
    )
}
export function Header ({title}){
    return <div>
      {title}
    </div>
}
