"use client";

import { useState } from "react";
import Spinner from "utils/components/spinner";
import { deleteTodo } from "app/_actions/delete-todo";

type ItemProps = {
  todo: {
    id: number;
    text: string;
  };
  addOptimistic: (id: number) => void;
};

const Item = ({ todo, addOptimistic }: ItemProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDeleteButton = () => {
    addOptimistic(todo.id);

    setIsLoading(true);

    deleteTodo(todo.id).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <li
      key={todo.id}
      className="my-2 bg-gray-100 p-2 hover:cursor-pointer hover:line-through"
      onClick={handleDeleteButton}
    >
      <p className="flex items-center gap-1">
        {todo.text} {isLoading && <Spinner className="h-4 w-4" />}
      </p>
    </li>
  );
};

export default Item;
