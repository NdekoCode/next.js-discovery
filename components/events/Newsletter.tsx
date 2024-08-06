
const NewsletterForm = () => {
  return (
    <form>
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
            type="text"
            id="hero-input"
            name="hero-input"
            className="block w-full py-2 text-sm border-transparent rounded-lg ps-9 pe-3 focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Enter your email"
          />
        </div>
        <a
          className="w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
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
        </a>
      </div>
      <p className="mt-2 text-xs text-gray-500">
        No spam, unsubscribe at any time.
      </p>
    </form>
  );
};

export default NewsletterForm;
