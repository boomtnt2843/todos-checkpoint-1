import React, { useState } from 'react';
import './App.css';
import { Todo } from './type';
import TodoList from './Todolist';

const mockTodos: Todo[] = [
  { id: 1, text: "Buy Milk 🥛", completed: false },
  { id: 2, text: "Buy eggs 🥚", completed: true },
  { id: 3, text: "Buy bread 🥖", completed: false },
]

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);

  return (
    <div>
      <h1>Todo list</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp;
