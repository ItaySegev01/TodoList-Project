export function TodoItem({ complited,id,title,toggleTodo,deleteTodo }){
    return (
        <li>
            <label>
              <input type="checkbox" 
              checked={complited} 
              onChange={e => toggleTodo(id,e.target.checked)}
              ></input>
              {title}
            </label>
            <button className="btn btn-danger" 
            onClick={() => deleteTodo(id)}
            >Delete
            </button>
        </li>
    )
}