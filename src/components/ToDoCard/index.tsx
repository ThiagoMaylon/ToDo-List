import { useState } from 'react';
import { IoMdTrash } from 'react-icons/io'
import style from './style.module.css';

interface props{
    todo: string,
}

export const ToDoCard = ({todo, }: props) => {
    const [complet, setComplet] = useState<string>("")

    const handleClick = () => {
        complet == "complet" ? setComplet("") : setComplet("complet")
    }

    return(
       <div className={style.Card} >
            <div className={style.radio_container}>
                <div className={style.radio} onClick={handleClick}>
                    <div className={`${style.pointer} ${style[complet]}`}></div>
                </div>
                <div className={style.trash}>
                    <IoMdTrash 
                        size={20} 
                        color='#aaa'
                    />
                </div>
            </div>
            <p className={style[complet]}>{todo}</p>
       </div>
    )
}