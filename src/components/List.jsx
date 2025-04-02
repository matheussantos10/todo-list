import { ItemList } from "./ItemList"

export const List = (props) => {

    const { listTask, deleteTask, editTask } = props

    return (
        <div
            className="flex flex-col m-3 px-3 gap-3 h-[400px] overflow-y-auto 
                [&::-webkit-scrollbar]:w-1.5
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
            {listTask.map(task => {
                return (
                    <ItemList
                        task={task}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
                )
            })}
        </div>
    )
}