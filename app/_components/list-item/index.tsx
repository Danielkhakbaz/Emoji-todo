"use client";

import { useOptimistic } from "react";
import Item from "app/_components/list-item/item";

type ListItemProps = {
  todos: {
    id: number;
    text: string;
  }[];
};

const ListItem = ({ todos }: ListItemProps) => {
  const [optimisticState, addOptimistic] = useOptimistic(todos, (state, id) =>
    state.filter((item) => item.id !== id)
  );

  return (
    <ul className="flex-grow overflow-auto p-4 py-0">
      {optimisticState.map((todo) => (
        <Item key={todo.id} todo={todo} addOptimistic={addOptimistic} />
      ))}
    </ul>
  );
};

export default ListItem;
