import React, { useState } from "react";

interface Todo {
  id: number;
  task: string;
  done: boolean;
}

export const UseState = () => {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);


    function addTodo() {
    const newTodo: Todo = {
      id: Date.now(),
      task: "Learn TypeScript",
      done: true,
    };

    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      {/* Counter */}
      <div>
        <h2>Count: {count}</h2>

        <button onClick={() => setCount(count + 1)}>Increment</button>

        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      {/* User State */}

      <div>
        <button
          onClick={() =>
            setUser({
              username: "Mahdi",
              email: "mahdi@email.com",
            })
          }
        >
          Load User
        </button>

        {user && (
          <div>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
          </div>
        )}
      </div>

      {/* Todo List */}
      <div>
        <button onClick={addTodo}>Add Todo</button>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.task} - {todo.done ? "✅" : "❌"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
