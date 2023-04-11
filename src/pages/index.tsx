import Head from "next/head"
import style from '../styles/Home.module.css'
import { ToDo } from "@/components/ToDo"
import { IoIosAddCircleOutline } from "react-icons/io"
import { useState } from "react"

export default function Home() {
  const [task, setTask] = useState<string[]>([])
  const [newTask, setNewTask] = useState<string>("")

  const hadleClick = (event:  React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const tasks = newTask
    setTask([...task, tasks])
    setNewTask(" ")
  }

  const ClickDelet = () => {
    alert('delet')
  }
  return (
    <>
      <Head>
        <title>To Do</title>
      </Head>
      <main className={style.main}>

        <form className={style.form}>
          <div className={style.input}>
            <input 
              type="text" 
              placeholder="Add Item" 
              onChange={e => setNewTask(e.target.value)}
              value={newTask}
            />
            <button onClick={hadleClick} type="submit">
              <IoIosAddCircleOutline size={30} />
            </button>
          </div>
        </form>

        
        <ToDo todo={task} ClickDelet={ClickDelet}/>
      </main>
    </>
  )
}
