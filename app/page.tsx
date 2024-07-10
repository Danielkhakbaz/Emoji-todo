// import ListItem from "app/_components/list-item";

const HomePage = async () => {
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
      <ul className="flex-grow overflow-auto p-4 py-0">
        {/* <ListItem todo={todo} /> */}
        {/* {todos.map((todo) => (
          <li className="bg-gray-100 p-2 my-2" key={todo.id}>{todo.text}</li>
        ))} */}
      </ul>
      <form
        className="flex gap-3 p-4"
        //  action={submit}
      >
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
        <button className="rounded-xl bg-blue-500 px-4 py-2 font-bold text-white">
          ✉️
        </button>
      </form>
    </main>
  );
};

export default HomePage;
