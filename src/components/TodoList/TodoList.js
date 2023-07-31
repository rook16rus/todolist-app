import TodoListItem from "../TodoListItem/TodoListItem";
import TodoEmpty from "../TodoEmpty/TodoEmpty";

import "./TodoList.scss"

const TodoList = ({data, loading, error, onCheckTask, onDeleteTask}) => {
    const elements = data.map((item) => {
        return <TodoListItem key={item.id} {...item} onCheckTask={() => onCheckTask(item.id)} onDeleteTask={() => onDeleteTask(item.id)} />
    })

    const errorMessage = error ? <h2 className="todo__status-message">Ошибка</h2> : null;
    const loadingMessage = loading ? <h2 className="todo__status-message">Загрузка...</h2> : null;
    const emptyContent = !loading && !error && elements.length < 1 ? <TodoEmpty /> : null;
    const content = <View elements={elements} />;

    return (
        <>
            {errorMessage}
            {loadingMessage}
            {emptyContent}
            {content}
        </>
    )
}

const View = ({elements}) => {
    return (
        <ul className="todo__list">
            {elements}
        </ul>
    )
}

export default TodoList