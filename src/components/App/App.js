import { useEffect, useState } from "react";
import { useHttp } from "../../hooks/useHttp";

import TodoControls from "../TodoControls/TodoControls";
import TodoInfo from "../TodoInfo/TodoInfo";
import TodoList from "../TodoList/TodoList";

import './App.scss'
import logo from './logo.svg';

const App = () => {
    const [data, setData] = useState([]);
    const { request } = useHttp();

    useEffect(() => {
        request("http://localhost:3001/tasks")
            .then(tasks => {
                setData(tasks)
            })
    }, [])

    const onDeleteTask = (id) => {
        request(`http://localhost:3001/tasks/${id}`, "DELETE")
            .then(() => {
                setData(data => {
                    const newArray = data.filter(item => item.id !== id);
                    return newArray
                })
            })
    }

    const onCheckTask = (id) => {
        const foundedTask = data.find((item) => item.id === id);

        request(
            `http://localhost:3001/tasks/${id}`,
            "PUT",
            JSON.stringify({...foundedTask, checked: !foundedTask.checked})
        ).then(() => {
            setData(data => {
                return data.map(item => {
                    if (item.id === id) {
                        return {...item, checked: !item.checked}
                    }

                    return item;
                })
            })
        })
    }

    const onAddTask = (value) => {
        request("http://localhost:3001/tasks", "POST", JSON.stringify({id: data.length + 1, text: value, checked: false}))
            .then(() => {
                setData(data => [...data, {id: data.length + 1, text: value, checked: false}])
            })
    }

    const completedTasksCount = data.filter(item => item.checked).length

    return (
        <div className="todo">
            <header className="todo__header">
                <img className="togo__logo" width={126} height={48} src={logo} alt="Логотип компании"/>
            </header>
            <div className="todo__body">
                <div className="container">
                    <TodoControls onAddTask={onAddTask}/>
                    <TodoInfo tasksCount={data.length} completedTasksCount={completedTasksCount}/>
                    <TodoList data={data} onDeleteTask={onDeleteTask} onCheckTask={onCheckTask} />
                </div>
            </div>
        </div>
    );
}

export default App;

/*

    @include mq('custom', 'max', 1024) {

    }

    @include mq('custom', 'max', 768) {

    }

    @include mq('custom', 'max', 640) {

    }

*/


