import { FC } from "react";

export const Loading: FC = () => {
  return (
    <div className="flex w-screen space-x-2 justify-center min-h-screen items-center">
      <span className="sr-only">Loading...</span>
      <div className="h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="h-3 w-3 bg-black rounded-full animate-bounce" />
    </div>
  );
};
