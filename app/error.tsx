"use client";

import Link from "next/link";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-2xl">There is a problem!</h2>
        <pre className="inline-block w-5/6 whitespace-pre-wrap rounded-md bg-[#EDF2F7] text-center text-[#1A202C] shadow-xl">
          {error.message}
        </pre>
        <h4 className="text-lg">
          Please try again. If the problem persists, fell free to contact me!
        </h4>
        <div className="flex items-center justify-center gap-4">
          <button
            className="flex items-center gap-4 rounded-md bg-purple-400 p-3 transition-colors duration-150 hover:bg-purple-500"
            onClick={reset}
          >
            <span>Try Again</span>
          </button>
          <Link href="/">
            <button className="rounded-md bg-yellow-400 p-3 transition-colors duration-150 hover:bg-yellow-500">
              Back to the Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
