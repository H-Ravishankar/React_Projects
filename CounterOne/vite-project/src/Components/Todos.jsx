export function Todos({todos}){
    return (
        <>
           {todos.map((todo)=>{
                 return <div>
                    <h2>{todo.title}</h2>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true ?"Completed":"Mark as completed"}</button>
                 </div>
           })}
        </>
    )
}