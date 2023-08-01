import { useSelector } from "react-redux";

import "./TodoInfo.scss"

const TodoInfo = () => {
    const tasks = useSelector(state => state.tasks);
    const completedTasksCount = tasks.filter(item => item.checked).length

    return (
        <div className="todo__info">
            <div className="todo__info-all">
                <span>Всего задач</span>
                <span className="todo__info-count">{tasks.length}</span>
            </div>
            <div className="todo__info-completed">
                <span>Выполнено</span>
                <span className="todo__info-count">
                    {
                        completedTasksCount > 0 ?
                        `${completedTasksCount} из ${tasks.length}` :
                        completedTasksCount
                    }
                </span>
            </div>
        </div>
    )
}

export default TodoInfo