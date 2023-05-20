import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            todo={todo}
            tog
          />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}
