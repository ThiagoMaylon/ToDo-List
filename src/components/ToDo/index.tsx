import { ToDoCard } from "../ToDoCard"
import style from './style.module.css'

type Task = {
    todo: string[],
    ClickDelet: () => void
}
export const ToDo = ({todo, ClickDelet}: Task) => {
    return(
        <div className={style.todo}>
            <p className={style.p}>TO DO:</p>

            <div className={style.itens_todo}>
                {todo.map((todos, index) => (
                    <ToDoCard todo={todos} ClickDelet={ClickDelet} key={index}/>
                ))}
            </div>
         
        </div>
    )
}