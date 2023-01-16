import React from "react"
const todos=[{
    id:1,
    title:"Gym",
    completed:"false"
 }, {
        id:2,
        title:"HomeWork",
        completed:"false"
   },{
        id:3,
        title:"Game",
        completed:"false"
    },
    {
        id:4,
        title:"DSA",
        completed:"false"
    }]
class TodoList extends React.Component{
    render(){
        return(
            <>
                <ul>
                    {todos.map((todo)=>(
                        <li key={todo.id}>{todo.title}
                        <h1>{todo.completed}</h1>
                        </li>
                    ))}
                </ul>
            </>

        )
    }
}
export default TodoList