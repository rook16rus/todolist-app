import TodoListItem from "../TodoListItem/TodoListItem";

import clipboard from './clipboard.png'

const TodoList = () => {
    return (
        <>
            <ul className="todo__list">
                <TodoListItem />
            </ul>
            <div className="todo__empty">
                <img className="todo__empty-img" width={56} height={56} src={clipboard} alt="Иконка"/>
                <p className="todo__empty-text">
                    <b>У вас еще нет зарегистрированных задач</b>
                    Создавайте задачи и организуйте свои дела
                </p>
            </div>
        </>
    )
}

export default TodoList