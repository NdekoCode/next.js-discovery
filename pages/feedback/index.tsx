import { FormEvent, useRef, useState } from 'react';

const index = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const feedbackRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const feedback = {
      email: emailRef?.current?.value || "",
      feedback: feedbackRef?.current?.value || "",
    };
    await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedback),
    });
    
    setIsLoading(false);
    if (emailRef?.current) emailRef.current.value = "";
    if (feedbackRef?.current) feedbackRef.current.value = "";
  };
  return (
    <div className="container mt-10">
      <div className="flex flex-col gap-y-10">
        <h1 className="text-5xl font-medium text-gray-950">Feedback form</h1>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col max-w-sm gap-y-3"
        >
          <div className="max-w-sm space-y-3">
            <div className="max-w-sm">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                className="block w-full px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="ndekocode@site.com"
              />
            </div>

            <div className="max-w-sm">
              <label
                htmlFor="feedback"
                className="block mb-2 text-sm font-medium"
              >
                Feedback
              </label>
              <textarea
                ref={feedbackRef}
                id="feedback"
                className="block w-full px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                rows={3}
                placeholder="Say hi..."
                defaultValue={""}
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg w-max gap-x-2 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            {isLoading ? (
              <>
                <span
                  className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                  role="status"
                  aria-label="loading"
                />
                Loading
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default index;
