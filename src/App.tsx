import { useState } from "react";
import { TodoItem } from "./Interfaces";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, title: "learn typescript", isDone: false },
    { id: 2, title: "walk the dog", isDone: true },
  ]);

  // add todo
  const addTodo = (title: string) => {
    const todo = {
      title: title,
      id: Math.floor(Math.random() * 10000) + 1,
      isDone: false,
    };

    setTodos([...todos, todo]);
  };

  // delete todo
  const deleteTodo = (id: number) => {
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
  };

  // finish todo
  const finishTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  };

  const clearFinishedTask = () => {
    const updatedTodos = todos.filter((todo) => todo.isDone !== true);
    setTodos(updatedTodos);
  };

  // count todo
  const todoCount = todos.filter((todo) => todo.isDone !== true).length;

  return (
    <>
      <div className="app">
        <div className="todo">
          <header>
            <div>
              {todoCount > 0 ? (
                <p>
                  You have {todoCount}{" "}
                  {todoCount > 1 ? "activities" : "activity"} to do
                </p>
              ) : (
                <p>No todos? you can add some : {")"}</p>
              )}
            </div>
            {todos.length > 0 && (
              <button className="btn-clear" onClick={clearFinishedTask}>
                Delete finished tasks
              </button>
            )}
          </header>
          <TodoForm onAdd={addTodo} />
          <div className="todolist">
            {todos.length > 0 ? (
              <>
                {todos
                  .sort((a, b) => Number(a.isDone) - Number(b.isDone))
                  .map((todo) => (
                    <Todo
                      todo={todo}
                      key={todo.id}
                      onDelete={deleteTodo}
                      onFinish={finishTodo}
                    />
                  ))}
              </>
            ) : (
              <p>No todos</p>
            )}
          </div>
        </div>
      </div>
      <footer>
        <p>Developed by Clinton Orbaña</p>
      </footer>
    </>
  );
};

export default App;
