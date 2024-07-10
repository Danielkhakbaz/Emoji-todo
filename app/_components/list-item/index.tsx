type ListItemProps = {
  todo: {
    id: number;
    text: string;
  };
};

const ListItem = async ({ todo }: ListItemProps) => {
  return (
    <li key={todo.id} className="my-2 bg-gray-100 p-2">
      {todo.text}
    </li>
  );
};

export default ListItem;
