import Link from "next/link";

const NotFound = async () => {
  return (
    <div className="flex h-screen w-screen flex-col justify-center gap-8 py-8 text-center">
      <b className="mb-4 text-2xl font-bold">NOT FOUND!</b>
      <h3 className="text-[12rem] font-extrabold">404</h3>
      <div className="mt-8 flex flex-col text-center">
        <Link href="/">
          <button className="rounded-md bg-yellow-400 p-3 transition-colors duration-150 hover:bg-yellow-500">
            Back to the Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
