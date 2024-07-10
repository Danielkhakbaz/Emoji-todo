"use client";

import { deleteTodo } from "app/_actions/delete-todo";

type ListItemProps = {
  todo: {
    id: number;
    text: string;
  };
};

const ListItem = ({ todo }: ListItemProps) => {
  return (
    <li
      key={todo.id}
      className="my-2 bg-gray-100 p-2 hover:cursor-pointer hover:line-through"
      onClick={() => deleteTodo(todo.id)}
    >
      {todo.text}
    </li>
  );
};

export default ListItem;
