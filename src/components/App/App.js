import TodoControls from "../TodoControls/TodoControls";
import TodoInfo from "../TodoInfo/TodoInfo";
import TodoList from "../TodoList/TodoList";

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
                    <TodoControls/>
                    <TodoInfo/>
                    <TodoList/>
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


