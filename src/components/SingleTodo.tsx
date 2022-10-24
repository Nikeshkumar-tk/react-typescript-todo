import '../styles.css'
import { Todo } from '../model';
import { useState } from 'react'
interface Props{
    todo:Todo;
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}





const SingleTodo = ({todo, todos,setTodos}:Props) => {

    const [editedTodo, setEditedTodo] = useState<string>("")
    const [editMode, setEditMode] = useState<boolean>(false)

    const handleDelete = ( id : number) => {

        const newTodo:Todo[] = todos.filter((todo) => todo.id != id)
        setTodos(newTodo)

    }

    const handleEdit = () => {
       setEditMode(true)

    }
    const handleDone = () => {
        setTodos(todos.map((t) => (
            t.id === todo.id ? {...t,isDone:!t.isDone} : t
        )))
    }
    

  return (
    <div>
        <form className="todos__single">
           {
            todo.isDone ? (
                <s className="todos__single--text">
                { todo.todo }
            </s> 
            ) : (


                <span className="todos__single--text">
                    { todo.todo }
                </span> 
            )
            }
           
            <div>
                <span className="icon" onClick={() => handleEdit( )}><i className="fa-solid fa-pen"></i></span>
                <span className="icon" onClick={() => handleDelete(todo.id)}><i className ="fa-solid fa-trash"></i></span>
                <span className="icon" onClick={() => handleDone()}><i className ="fa-solid fa-check"></i></span>
            </div>
        </form>
    </div>
  )
}

export default SingleTodo