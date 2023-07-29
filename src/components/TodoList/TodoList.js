import TodoListItem from "../TodoListItem/TodoListItem";
import TodoEmpty from "../TodoEmpty/TodoEmpty";

import "./TodoList.scss"

const TodoList = ({data}) => {
    const elements = data.map((item, index) => {
        return <TodoListItem key={index} {...item} />
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