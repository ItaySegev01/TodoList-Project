import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App(){
  
  const [todos,setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })  
  
  useEffect(() => {
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  function AddTodo(title){
        setTodos(currentTodos => {
           return [
             ...currentTodos,
           {id: crypto.randomUUID(),title, complited : false},
           ]
         })
  }
 

  function toggleTodo (id, complited){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return {...todo,complited}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return ( 
 <>
 <NewTodoForm onSubmit = {AddTodo}/>
   <h2 className="header">Todo List :</h2>
  <TodoList todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
 </>
  )
}
