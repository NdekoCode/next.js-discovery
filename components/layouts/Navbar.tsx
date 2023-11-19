import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";

export default function Navbar() {
  const { t } = useTranslation();
  const router = useRouter();
  const { userLanguage, handleLanguageChange } = useLanguage();
  return (
    <nav
      className="relative w-full px-4 mx-auto max-w-7xl sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          className={`flex-none text-xl font-semibold dark:text-white ${
            router.pathname === "/" ? "active" : ""
          }`}
        >
          {t("navbar.title")}
        </Link>
        <div className="sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-4 h-4 hs-collapse-open:hidden"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <svg
              className="hidden w-4 h-4 hs-collapse-open:block"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="navbar-collapse-with-animation"
        className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block "
      >
        <div className="flex flex-col mt-5 gap-y-4 gap-x-0 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7 lg:ml-10">
          <Link
            href="/blog"
            className={`flex-none text-xl font-semibold dark:text-white ${
              router.pathname === "/blog" ? "active" : ""
            }`}
          >
            {t("navbar.blog")}
          </Link>
          <Link
            href="/about"
            className={`font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500 ${
              router.pathname === "/about" ? "active" : ""
            }`}
          >
            {t("navbar.about")}
          </Link>
          <Link
            href="/contact"
            className={`font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500 ${
              router.pathname === "/contact" ? "active" : ""
            }`}
          >
            {t("navbar.contact")}
          </Link>
          <Link
            href="/my-todo"
            aria-current="page"
            className={`font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500 ${
              router.pathname === "/my-todo" ? "active" : ""
            }`}
          >
            My todos
          </Link>
          <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
            <button
              type="button"
              className="flex items-center w-full text-white/[.8] hover:text-white font-medium"
            >
              Academind
              <svg
                className="flex-shrink-0 ms-2 w-4 h-4"
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
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
              <Link
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/meetup"
              >
                Meetup
              </Link>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/new-meetup"
              >
                New Meetup
              </Link>
            </div>
          </div>
          <select
            value={userLanguage}
            defaultValue={userLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="py-3 px-4 max-w-[150px] pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          >
            <option selected>Open this select menu</option>
            <option value="en">Anglais</option>
            <option value="fr">Francais</option>
          </select>

          <div className="flex items-center gap-x-2 sm:ml-auto">
            <Link
              href="/auth/login"
              className="flex items-center font-medium text-gray-500 gap-x-2 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              {t("navbar.login")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
