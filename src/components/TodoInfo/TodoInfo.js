import "./TodoInfo.scss"

const TodoInfo = ({tasksCount, completedTasksCount}) => {
    return (
        <div className="todo__info">
            <div className="todo__info-all">
                <span>Всего задач</span>
                <span className="todo__info-count">{tasksCount}</span>
            </div>
            <div className="todo__info-completed">
                <span>Выполнено</span>
                <span className="todo__info-count">
                    {
                        completedTasksCount > 0 ?
                        `${completedTasksCount} из ${tasksCount}` :
                        completedTasksCount
                    }
                </span>
            </div>
        </div>
    )
}

export default TodoInfo