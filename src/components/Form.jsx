import AddIcon from '@mui/icons-material/Add';

export const Form = (props) => {

    const { descriptionTask, changeDecription, timeTask, changeTime, addTask } = props

    return (
        <div className="flex py-7 px-5 gap-2 text-white">
            <input
                className="rounded-lg px-3 w-full font-medium bg-[#393939]"
                type="text"
                value={descriptionTask}
                onChange={changeDecription}
            />

            <input
                className="rounded-lg px-3 bg-[#393939]"
                type="time"
                value={timeTask}
                onChange={changeTime}
            />

            <button
                className="flex px-3 py-1 gap-0.5 bg-[#393939] text-white rounded-lg cursor-pointer
                        hover:bg-[#414141]
                        active:bg-[#212121]"
                onClick={addTask}
            >
                Adicionar
                <AddIcon />
            </button>
        </div>
    )
}