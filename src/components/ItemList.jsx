import { Checkbox } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

export const ItemList = (props) => {

    const { task, deleteTask } = props

    const clickEditTask = (task) => {

        console.log(task)

        const containerTask = document.querySelector("#container_task")
        const containerEdit = document.querySelector("#container_edit")

        containerTask.classList.remove("flex")
        containerTask.classList.add("hidden")
        containerEdit.classList.remove("hidden")
        containerEdit.classList.add("flex")
    }

    const cancelEdit = () => {

        const containerTask = document.querySelector("#container_task")
        const containerEdit = document.querySelector("#container_edit")

        containerTask.classList.add("flex")
        containerTask.classList.remove("hidden")
        containerEdit.classList.add("hidden")
        containerEdit.classList.remove("flex")
    }

    return (
        <section className="p-1">
            <div
                id="container_task"
                className="flex gap-2 text-white items-center relative border-b border-b-[#2F2F2F]"
            >
                <span id="checkbox_task">
                    <Checkbox
                        size="small"
                        className="p-0"
                    />
                </span>

                <time id="time_task"> {task.time} </time>

                <span id="description_task"> {task.description} </span>

                <div className="absolute right-1 flex gap-3">
                    <button
                        className="cursor-pointer
                        hover:scale-120
                        ease-out 
                        duration-300"
                        onClick={() => clickEditTask(task)}
                    >
                        <EditIcon />
                    </button>
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
            </div>

            <div
                id="container_edit"
                className="hidden gap-3 text-white items-center relative"
            >
                <input
                    id="input_time"
                    className="rounded-lg px-3 bg-[#393939]"
                    type="time"
                // value={timeEdit}
                // onChange={editTime}
                />

                <input
                    id="input_text"
                    className="rounded-lg px-3 w-full font-medium bg-[#393939]"
                    type="text"
                // value={descriptionEdit}
                // onChange={editDescription}
                />

                <div className="absolute right-1 flex gap-3">
                    <button
                        className="cursor-pointer
                        hover:scale-120
                        ease-out 
                        duration-300"
                        onClick={cancelEdit}
                    >
                        <CloseIcon />
                    </button>
                    <button
                        className="cursor-pointer 
                        hover:scale-120
                        ease-out 
                        duration-300"
                    // onClick={() => deleteTask(task.id)}
                    >
                        <CheckIcon />
                    </button>
                </div>
            </div>
        </section>
    )
}