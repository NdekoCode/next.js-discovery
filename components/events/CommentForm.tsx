import { FC, FormEvent, useRef, useState } from 'react';

import { cn } from '../../lib/utils';

const CommentForm: FC<{
  eventId: string;
  getComments: () => Promise<void>;
}> = ({ eventId, getComments }) => {
  const fullNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState({
    message: "",
    status: null,
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(() => true);
    const name = fullNameInputRef.current?.value ?? "";
    const email = emailInputRef.current?.value ?? "";
    const commentBody = commentInputRef.current?.value ?? "";
    if (name && email && commentBody) {
      const comment = {
        eventId,
        id: Date.now(),
        name,
        email,
        body: commentBody,
      };
      try {
        const responseData = await (
          await fetch("/api/comments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              comment,
            }),
          })
        ).json();
        setIsLoading(() => false);
        setApiResponse(responseData);
        await getComments();
      } catch (error) {
        console.error(error);
        setIsLoading(() => false);
      }
    }
  };
  return (
    <div className="max-w-[85rem] w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800 sm:text-3xl">
            Post a comment
          </h2>
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
        {/* Card */}
        <div className="relative z-10 p-4 mt-5 bg-white border rounded-xl sm:mt-10 md:p-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="hs-feedback-post-comment-name-1"
                className="block mb-2 text-sm font-medium"
              >
                Full name
              </label>
              <input
                ref={fullNameInputRef}
                type="text"
                id="hs-feedback-post-comment-name-1"
                className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                name="fullName"
                placeholder="Full name"
              />
            </div>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="hs-feedback-post-comment-email-1"
                className="block mb-2 text-sm font-medium"
              >
                Email address
              </label>
              <input
                ref={emailInputRef}
                type="email"
                id="hs-feedback-post-comment-email-1"
                name="email"
                className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Email address"
              />
            </div>
            <div>
              <label
                htmlFor="hs-feedback-post-comment-textarea-1"
                className="block mb-2 text-sm font-medium"
              >
                Comment
              </label>
              <div className="mt-1">
                <textarea
                  ref={commentInputRef}
                  id="hs-feedback-post-comment-textarea-1"
                  name="body"
                  rows={3}
                  className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Leave your comment here..."
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="grid mt-6">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                {isLoading ? (
                  <span
                    className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </span>
                ) : (
                  <>Submit</>
                )}
              </button>
            </div>
          </form>
        </div>
        {/* End Card */}
      </div>
    </div>
  );
};

export default CommentForm;
