import { useState } from "react";

import TodoControls from "../TodoControls/TodoControls";
import TodoInfo from "../TodoInfo/TodoInfo";
import TodoList from "../TodoList/TodoList";

import './App.scss'
import logo from './logo.svg';

const App = () => {
    const [data, setData] = useState([
        {
            id: 1,
            text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            checked: true
        },
        {
            id: 2,
            text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            checked: false
        },
        {
            id: 3,
            text: "Integer urna interdum massa libero auctor.",
            checked: false
        },
    ]);

    const onDeleteTask = (id) => {
        setData(data => data.filter(item => item.id !== id))
    }

    const onCheckTask = (id) => {
        setData(data => {

            return data.map(item => {
                if (item.id === id) {
                    return {...item, checked: !item.checked}
                }

                return item;
            })
        })
    }

    const onAddTask = (value) => {
        setData(data => {
            return [...data, {id: data.length + 1, text: value, checked: false}];
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


