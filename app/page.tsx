import ListItem from "app/_components/list-item";
import SendButton from "app/_components/send-button";
import { getTodos } from "app/_actions/get-todos";
import { createTodo } from "app/_actions/create-todo";

const HomePage = async () => {
  const todos = await getTodos();

  return (
    <main className="m-auto flex h-dvh max-w-xl flex-col">
      <h1 className="flex items-center justify-between p-4 text-xl font-bold">
        Emoji TODO{" "}
        <a
          className="text-xs font-normal text-blue-600"
          href="https://github.com/Danielkhakbaz/Emoji-todo"
          target="_blank"
        >
          source
        </a>
      </h1>
      <ListItem todos={todos} />
      <form className="flex gap-3 p-4" action={createTodo}>
        <input
          className="w-full rounded-xl border border-gray-400 p-2 px-4 text-base"
          type="text"
          placeholder="🫡 (only emojis allowed)"
          pattern="^[\p{Emoji}]+$"
          name="text"
          autoFocus
          maxLength={10}
          required
        />
        <SendButton />
      </form>
    </main>
  );
};

export default HomePage;
