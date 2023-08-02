import TodoControls from "../TodoControls/TodoControls.tsx";
import TodoInfo from "../TodoInfo/TodoInfo.tsx";
import TodoList from "../TodoList/TodoList.tsx";

import './App.scss'
import logo from './logo.svg';

const App = () => {
    return (
        <div className="todo">
            <header className="todo__header">
                <img className="togo__logo" width={126} height={48} src={logo} alt="Логотип компании"/>
            </header>
            <div className="todo__body">
                <div className="container">
                    <TodoControls />
                    <TodoInfo />
                    <TodoList />
                </div>
            </div>
        </div>
    );
}

export default App;

