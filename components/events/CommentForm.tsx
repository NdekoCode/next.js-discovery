import { FC } from 'react';

const CommentForm: FC<{ eventId: string }> = ({ eventId }) => {
  return (
    <div className="max-w-[85rem] w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800 sm:text-3xl">
            Post a comment
          </h2>
        </div>
        {/* Card */}
        <div className="relative z-10 p-4 mt-5 bg-white border rounded-xl sm:mt-10 md:p-10">
          <form>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="hs-feedback-post-comment-name-1"
                className="block mb-2 text-sm font-medium"
              >
                Full name
              </label>
              <input
                type="text"
                id="hs-feedback-post-comment-name-1"
                className="block w-full px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
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
                type="email"
                id="hs-feedback-post-comment-email-1"
                className="block w-full px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
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
                  id="hs-feedback-post-comment-textarea-1"
                  name="hs-feedback-post-comment-textarea-1"
                  rows={3}
                  className="block w-full px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
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
                Submit
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
