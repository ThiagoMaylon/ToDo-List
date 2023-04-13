import { useRef, useState } from 'react';
import { IoMdTrash } from 'react-icons/io'
import style from './style.module.css';

interface props{
    todo: string,
    onTextObtained: (text: string | null | undefined) => void
}


export const ToDoCard = ({todo, onTextObtained}: props) => {
    const [complet, setComplet] = useState<string>("")
    const divRef = useRef<HTMLDivElement>(null); // Referência à div

    const handleClick = () => {
        complet == "complet" ? setComplet("") : setComplet("complet")
    }
    const HandleClickDelet = () => {
        const divText = divRef.current?.textContent;
        onTextObtained(divText);
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
                        onClick={HandleClickDelet}
                    />
                </div>
            </div>
            <p className={style[complet]} ref={divRef}>{todo}</p>
       </div>
    )
}