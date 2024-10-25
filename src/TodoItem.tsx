import React from "react";
import { Todo } from "./type";

type TodoItemProps = {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
    return (
        <li
            style={{
                textDecoration: props.todo.completed ? 'line-through' : 'none',
            }}
        >
            {props.todo.text}
        </li>
    );
};

export default TodoItem;