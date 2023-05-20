import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length ? (
        todos.map((todo, index) => (
          <Todo key={index} index={index} deleteTodo={deleteTodo} todo={todo} />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}
