import { useEffect, useState } from "react";

import TodoControls from "../TodoControls/TodoControls";
import TodoInfo from "../TodoInfo/TodoInfo";
import TodoList from "../TodoList/TodoList";

import './App.scss'
import logo from './logo.svg';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataFromLocalStorage = JSON.parse(localStorage.getItem("data"));
        setData(dataFromLocalStorage);
    }, [])

    const onDeleteTask = (id) => {
        setData(data => {
            const newArray = data.filter(item => item.id !== id);
            localStorage.setItem("data", JSON.stringify(newArray));

            return newArray
        })
    }

    const onCheckTask = (id) => {
        setData(data => {
            const newArray = data.map(item => {
                if (item.id === id) {
                    return {...item, checked: !item.checked}
                }

                return item;
            })

            localStorage.setItem("data", JSON.stringify(newArray));
            return newArray
        })
    }

    const onAddTask = (value) => {
        setData(data => {
            const newArray = [...data, {id: data.length + 1, text: value, checked: false}];

            localStorage.setItem("data", JSON.stringify(newArray));
            return newArray;
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


