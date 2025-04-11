import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

export const ItemList = (props) => {

    const { task, deleteTask } = props

    const [isChecked, setIsCheked] = useState(task.concluded)

    const clickCheck = () => {
        setIsCheked(!isChecked)
    }

    return (
        <section className="flex p-3 gap-3 text-white items-center relative border-b border-b-[#2F2F2F]">

            <input
                type="checkbox"
                className="size-4"
                checked={isChecked}
                onClick={clickCheck}
            />

            <div className={`text-xl flex gap-3 duration-500 ${isChecked && 'line-through text-[#616161] '}`}>
                <time> {task.time} </time>

                <span> {task.description} </span>
            </div>

            <div className="absolute right-2 flex">
                <button
                    className="cursor-pointer 
                    hover:scale-120
                    ease-out 
                    duration-300"
                    onClick={() => deleteTask(task.id)}
                >
                    <DeleteIcon />
                </button>
            </div>
        </section >
    )
}