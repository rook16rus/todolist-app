import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHttp } from "../../hooks/useHttp";

import TodoListItem from "../TodoListItem/TodoListItem";
import TodoEmpty from "../TodoEmpty/TodoEmpty";

import "./TodoList.scss"
import {checkTask, deleteTask, tasksFetched, tasksFetching, tasksFetchingError} from "../../actions/actions";

const TodoList = () => {
    const {tasks, tasksLoadingStatus} = useSelector(state => state);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(tasksFetching())

        request("http://localhost:3001/tasks")
            .then(tasks => {
                dispatch(tasksFetched(tasks))
            })
            .catch(() => {
                dispatch(tasksFetchingError())
            })
    }, [])

    const onDeleteTask = (id) => {
        request(`http://localhost:3001/tasks/${id}`, "DELETE")
            .then(() => {
                dispatch(deleteTask(id));
            })
    }

    const onCheckTask = (id) => {
        const foundedTask = tasks.find((item) => item.id === id);

        request(
            `http://localhost:3001/tasks/${id}`,
            "PUT",
            JSON.stringify({...foundedTask, checked: !foundedTask.checked})
        ).then(() => {
            dispatch(checkTask(id))
        })
    }

    const elements = tasks.map((item) => {
        return <TodoListItem key={item.id} {...item} onCheckTask={() => onCheckTask(item.id)} onDeleteTask={() => onDeleteTask(item.id)} />
    })

    if (tasksLoadingStatus === "loading") {
        return <h2 className="todo__status-message">Загрузка...</h2>;
    } else if (tasksLoadingStatus === "error") {
        return <h2 className="todo__status-message">Ошибка</h2>
    } else if (tasksLoadingStatus === "idle" && tasks.length < 1) {
        return <TodoEmpty />
    }

    return <View elements={elements} />;
}

const View = ({elements}) => {
    return (
        <ul className="todo__list">
            {elements}
        </ul>
    )
}

export default TodoList