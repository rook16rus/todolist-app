import TodoListItem from "../TodoListItem/TodoListItem";
import TodoEmpty from "../TodoEmpty/TodoEmpty";

const TodoList = () => {
    return (
        <>
            <ul className="todo__list">
                <TodoListItem />
            </ul>
            <TodoEmpty />
        </>
    )
}

export default TodoList