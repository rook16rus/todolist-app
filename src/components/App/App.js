import { useState } from "react";

import TodoControls from "../TodoControls/TodoControls";
import TodoInfo from "../TodoInfo/TodoInfo";
import TodoList from "../TodoList/TodoList";

import './App.scss'
import logo from './logo.svg';

const App = () => {
    const [data, setData] = useState([
        {
            text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            checked: true
        },
        {
            text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            checked: false
        },
        {
            text: "Integer urna interdum massa libero auctor.",
            checked: false
        },
    ]);

    const completedTasksCount = data.filter(item => item.checked).length

    return (
        <div className="todo">
            <header className="todo__header">
                <img className="togo__logo" width={126} height={48} src={logo} alt="Логотип компании"/>
            </header>
            <div className="todo__body">
                <div className="container">
                    <TodoControls/>
                    <TodoInfo tasksCount={data.length} completedTasksCount={completedTasksCount}/>
                    <TodoList data={data} />
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


