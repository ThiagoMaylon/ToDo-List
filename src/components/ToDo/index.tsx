import { ToDoCard } from "../ToDoCard"
import style from './style.module.css'

interface props{
    todo: string
}
export const ToDo = ({todo}: props) => {
    return(
        <div className={style.todo}>
            <ToDoCard todo={todo}/>
            <ToDoCard todo={todo}/>
            <ToDoCard todo={todo}/>
            <ToDoCard todo={todo}/>
            <ToDoCard todo={todo}/>
            <ToDoCard todo={todo}/>
        </div>
    )
}