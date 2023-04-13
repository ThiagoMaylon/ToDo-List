import { ToDoCard } from "../ToDoCard"
import style from './style.module.css'

type Task = {
    todo: string[],
}


export const ToDo = ({todo}: Task) => {
    function handleTextObtained(text: string) {
        console.log()
        if (todo.indexOf(text) > -1) {
            todo.splice(todo.indexOf(text), 1);
          }
    }
    return(
        <div className={style.todo}>
            <p className={style.p}>TO DO:</p>

            <div className={style.itens_todo}>
                {todo.map((todos, index) => (
                    <ToDoCard todo={todos} key={index} onTextObtained={handleTextObtained}/>
                ))}
            </div>
         
        </div>
    )
}