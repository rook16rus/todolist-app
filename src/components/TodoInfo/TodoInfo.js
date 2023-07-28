import "./TodoInfo.scss"

const TodoInfo = () => {
    return (
        <div className="todo__info">
            <div className="todo__info-all">
                <span>Всего задач</span>
                <span className="todo__info-count">0</span>
            </div>
            <div className="todo__info-completed">
                <span>Выполнено</span>
                <span className="todo__info-count">0</span>
            </div>
        </div>
    )
}

export default TodoInfo