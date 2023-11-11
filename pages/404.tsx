import { NextPage } from "next";
import Link from "next/link";

const Error404: NextPage = () => {
  return (
    <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role="main">
        <div className="px-4 py-10 text-center sm:px-6 lg:px-8">
          <h1 className="block font-bold text-gray-800 text-7xl sm:text-9xl dark:text-white">
            404
          </h1>
          <h1 className="block text-2xl font-bold text-white" />
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Oops, something went wrong.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Sorry, we couldn't find your page.
          </p>
          <div className="flex flex-col items-center justify-center gap-2 mt-5 sm:flex-row sm:gap-3">
            <Link
              className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-center text-white transition bg-blue-600 border border-transparent rounded-md sm:w-auto gap-x-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
              href="/"
              target="_blank"
            >
              Go Home
            </Link>
            <Link
              className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-semibold text-blue-500 transition-all border border-transparent rounded-md sm:w-auto hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-slate-900"
              href="./blog"
            >
              <svg
                className="w-2.5 h-2.5"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
      {/* ========== END MAIN CONTENT ========== */}
      {/* ========== FOOTER ========== */}
      <footer className="py-5 mt-auto text-center">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">© All Rights Reserved. 2023.</p>
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
    </div>
  );
};

export default Error404;
