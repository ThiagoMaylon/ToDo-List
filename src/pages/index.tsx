import Head from "next/head"
import style from '../styles/Home.module.css'
import { ToDo } from "@/components/ToDo"
import { IoIosAddCircleOutline } from "react-icons/io"
export default function Home() {

  return (
    <>
      <Head>
        <title>To Do</title>
      </Head>
      <main className={style.main}>

        <div className={style.form}>
          <div className={style.input}>
            <input type="text" placeholder="Add Item"/>
            <button>
              <IoIosAddCircleOutline size={30} />
            </button>
          </div>
        </div>

        <p className={style.p}>TO DO</p>
        <ToDo todo="teste"/>
      </main>
    </>
  )
}
