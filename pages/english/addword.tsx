import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  word: z
    .string({
      required_error: "The word is required",
      message: "The word must be a string",
    })
    .max(255, "Your word is too big"),
  language: z
    .string({
      required_error: "The language is required",
      message: "The language must be a string",
    })
    .max(3, "Your word is too big"),
});
const addWord: FC = () => {
  type FormType = z.infer<typeof formSchema>;
  const { register, handleSubmit, formState } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });
  const { errors, isSubmitting, isValid } = formState;
  const addWordFormHandler: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };
  return (
    <>
      <main className="w-full max-w-md p-6 mx-auto">
        <div className="bg-white border border-gray-200 shadow-sm mt-7 rounded-xl dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Add a new word
              </h1>
            </div>
            <div className="mt-5">
              {/* Form */}
              <form onSubmit={handleSubmit(addWordFormHandler)} method="POST">
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="word"
                      className="block mb-2 text-sm dark:text-white"
                    >
                      Word
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="email"
                        className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        aria-describedby="word-error"
                        {...register("word")}
                      />
                      {errors.word ? (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-red-500"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      ) : null}
                    </div>{" "}
                    {errors.word?.message ? (
                      <p className="mt-2 text-xs text-red-600" id="email-error">
                        Please include a valid word
                      </p>
                    ) : null}
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="language"
                        className="block mb-2 text-sm dark:text-white"
                      >
                        Language
                      </label>
                    </div>
                    <div className="relative">
                      <select
                        id="language"
                        className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        aria-describedby="language-error"
                        {...register("language")}
                      >
                        <option value="en">English</option>
                        <option value="fr">French</option>
                      </select>
                      {errors.language ? (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-red-500"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      ) : null}
                    </div>
                    {errors.language?.message ? (
                      <p
                        className="mt-2 text-xs text-red-600"
                        id="password-error"
                      >
                        1+ characters required
                      </p>
                    ) : null}
                  </div>
                  {/* End Form Group */}
                  <button
                    type="submit"
                    disabled={!(isValid || isSubmitting)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 disabled:cursor-not-allowed"
                  >
                    Add word
                  </button>
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default addWord;
