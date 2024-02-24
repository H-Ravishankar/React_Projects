export function CreateTodo(){
    return(
        <>
        <input type="text" placeholder="title" style={{margin: 10, padding : 10}} /> 
        <br />
        <input type="text" placeholder="description" style={{margin: 10, padding: 10}} />
        <br />
        <button style={{marginTop: 5}}>Add Todo</button>
      </>
    )
  
}