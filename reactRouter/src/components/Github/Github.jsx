import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
function GitHub(){
    const data = useLoaderData()
    // const [response, setResponse] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/H-Ravishankar')
    //     .then((response)=>response.json())
    //     .then((response)=>{
    //       console.log(response)
    //       setResponse(response)
    //     })
    // },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers  :  {data.login} 
        <img className="mt-2 rounded-full content-center" src= {data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}
export default GitHub


export const githubInfoLoader = async()=>{
const response = await fetch('https://api.github.com/users/H-Ravishankar')
return response.json()
}