import { FC, FormEvent } from "react";
import classes from "../../styles/NewMeetupForm.module.scss";
export const NewMeetupForm: FC = () => {
  const handleSubmit: (e: FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {/* Comment Form */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="mx-auto max-w-2xl">
          {/* Card */}
          <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
            <form className={classes.form} onSubmit={handleSubmit}>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="meetup-title"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Meetup Title
                </label>
                <input
                  type="text"
                  required
                  id="meetup-title"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm border  outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Meetup Title"
                />
              </div>

              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="meetup-image"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Meetup Image
                </label>
                <input
                  type="url"
                  required
                  id="meetup-image"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm border  outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Meetup Image"
                />
              </div>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="meetup-address"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Meetup Address
                </label>
                <input
                  type="text"
                  required
                  id="meetup-address"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm border  outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Meetup Address"
                />
              </div>
              <div>
                <label
                  htmlFor="meetup-description"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Meetup Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="meetup-description"
                    name="meetup-description"
                    required
                    rows={3}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm border  outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Leave your comment here..."
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
      </div>
      {/* End Comment Form */}
    </div>
  );
};
