import { FormEvent, useRef, useState } from 'react';

import { cn } from '../../lib/utils';

const NewsletterForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState({
    message: "",
    status: null,
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(() => true);
    const target = emailInputRef.current;

    const value = target?.value;
    if (value) {
      try {
        const data = await (
          await fetch("/api/subscription", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: value,
            }),
          })
        ).json();
        setApiResponse(() => data);
        console.log(data);

        setIsLoading(() => false);
        if (emailInputRef.current) {
          emailInputRef.current.value = "";
        }
      } catch (error) {
        setIsLoading(() => false);
        console.log(error);
        setApiResponse(() => ({
          message: "",
          status: null,
        }));
      }
    }

    setIsLoading(() => false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-gray-200 rounded-lg">
        <div className="relative w-full">
          <label htmlFor="hero-input" className="sr-only">
            Subscribe
          </label>
          <div className="absolute inset-y-0 z-20 flex items-center pointer-events-none start-0 ps-3">
            <svg
              className="text-gray-400 shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width={20} height={16} x={2} y={4} rx={2} />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <input
            type="email"
            ref={emailInputRef}
            id="hero-input"
            name="hero-input"
            className="block w-full py-2 text-sm border-transparent rounded-lg ps-9 pe-3 focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Enter your email"
          />
        </div>
        <button className="w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          {isLoading ? (
            <span
              className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </span>
          ) : (
            <>
              Register
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>
      {apiResponse.message || apiResponse.status ? (
        <p
          className={cn(
            "mt-2 text-xs",
            apiResponse.status !== null &&
              apiResponse.status >= 200 &&
              apiResponse.status <= 299
              ? " text-green-500"
              : " text-red-500"
          )}
        >
          {apiResponse.message}
        </p>
      ) : (
        <p className="mt-2 text-xs text-gray-500">
          No spam, unsubscribe at any time.
        </p>
      )}
    </form>
  );
};

export default NewsletterForm;
