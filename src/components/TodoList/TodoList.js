import TodoListItem from "../TodoListItem/TodoListItem";
import TodoEmpty from "../TodoEmpty/TodoEmpty";

import "./TodoList.scss"

const TodoList = ({data, onCheckTask, onDeleteTask}) => {
    const elements = data.map((item) => {
        return <TodoListItem key={item.id} {...item} onCheckTask={() => onCheckTask(item.id)} onDeleteTask={() => onDeleteTask(item.id)} />
    })

    const content = elements.length > 0 ?
                    <View elements={elements} /> :
                    <TodoEmpty />

    return content
}

const View = ({elements}) => {
    return (
        <ul className="todo__list">
            {elements}
        </ul>
    )
}

export default TodoList