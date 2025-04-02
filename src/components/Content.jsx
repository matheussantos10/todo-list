import { useState } from "react";
import { List } from "./List"
import { Form } from "./Form";
import Swal from "sweetalert2";

export const Content = () => {

    const [descriptionTask, setDescriptionTask] = useState('')
    const [timeTask, setTimeTask] = useState('')
    const [listTask, setListTask] = useState([])


    const changeDecription = (e) => {
        setDescriptionTask(e.target.value)
    }

    const changeTime = (e) => {
        setTimeTask(e.target.value)
    }

    const addTask = () => {
        if (descriptionTask === '' || timeTask === '') {
            Swal.fire({
                theme: 'dark',
                title: "Campos vazios",
                text: "Um ou mais campos estão vazios",
                background: "#212121",
                color: "#fff",
                confirmButtonColor: "#7d7d7d",
                reverseButtons: true
            })
        } else {

            const taskToAdd = {
                id: listTask.length + 1,
                concluded: false,
                time: timeTask,
                description: descriptionTask
            }

            setListTask(currentList => [...currentList, taskToAdd])
            setDescriptionTask('')
            setTimeTask('')
        }
    }

    const editTask = async (task) => {
        console.log("editando")
        console.log(task)




    }

    const deleteTask = (id) => {
        const currentList = structuredClone(listTask)
        const newListTask = currentList.filter((task) => task.id !== id)

        setListTask(newListTask)
    }

    const deleteAllTasks = async () => {

        const { value: confirm } = await Swal.fire({
            theme: 'dark',
            title: "Excluir tudo?",
            text: "Deseja excluir todas as tarefas?",
            background: "#212121",
            color: "#fff",
            showDenyButton: true,
            denyButtonText: "Não",
            confirmButtonText: "Sim",
            confirmButtonColor: "#4d973a",
            reverseButtons: true
        })

        if (confirm) {
            setListTask([])
        }
    }


    return (
        <section className="h-full relative mt-5">
            <Form
                descriptionTask={descriptionTask}
                changeDecription={changeDecription}
                timeTask={timeTask}
                changeTime={changeTime}
                addTask={addTask}
            />

            <hr className="border-[#636363]" />

            <List
                listTask={listTask}
                deleteTask={deleteTask}
                editTask={editTask}
            />

            <div className="absolute bottom-5 right-5">
                <button
                    className="flex p-2 bg-[#393939] text-white rounded-lg cursor-pointer"
                    onClick={deleteAllTasks}
                >
                    Limpar tudo
                </button>
            </div>

        </section >
    )
}