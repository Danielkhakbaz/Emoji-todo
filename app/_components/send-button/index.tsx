"use client";

import { useFormStatus } from "react-dom";
import Spinner from "utils/components/spinner";

const SendButton = () => {
  const status = useFormStatus();

  return (
    <button className="h-full w-min rounded-xl bg-blue-500 px-4 py-2 font-bold text-white">
      {!status.pending ? "✉️" : <Spinner />}
    </button>
  );
};

export default SendButton;
