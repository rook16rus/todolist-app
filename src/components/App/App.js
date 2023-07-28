import TodoControls from "../TodoControls/TodoControls";

import logo from './logo.svg';
import TodoInfo from "../TodoInfo/TodoInfo";
import TodoList from "../TodoList/TodoList";

const App = () => {
  return (
    <div className="todo">
      <header className="todo__header">
        <img className="togo__logo" width={126} height={48} src={logo} alt="Логотип компании"/>
      </header>
      <div className="todo__body">
        <TodoControls/>
        <TodoInfo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
