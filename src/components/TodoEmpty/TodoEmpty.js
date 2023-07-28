import clipboard from "../TodoList/clipboard.png";
import "./TodoEmpty.scss"

const TodoEmpty = () => {
    return (
        <div className="todo__empty">
            <img className="todo__empty-img" width={56} height={56} src={clipboard} alt="Иконка"/>
            <p className="todo__empty-text">
                <b>У вас еще нет зарегистрированных задач </b>
                Создавайте задачи и организуйте свои дела
            </p>
        </div>
    )
}

export default TodoEmpty