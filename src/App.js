import './App.css';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
