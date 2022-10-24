import '../styles.css'
import { useRef } from 'react'

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:( e:React.FormEvent ) => void
}
const InputFeild:React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const todoRef = useRef<HTMLInputElement>(null)
    return (
    <form action="" className="input" onSubmit={( e ) => {
        
        handleAdd( e )
        todoRef.current?.blur()
        
        }}>
        <input type="text" value={todo} placeholder='Enter a task' className="input__box" onChange={(e) => setTodo(e.target.value)}/>
        <button className="input_submit" type='submit'>Go</button>
    </form>
  )
}

export default InputFeild