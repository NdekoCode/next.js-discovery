import { useRouter } from 'next/router';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { BASE_URL } from '../../utils/data/constants';

const formSchema = z.object({
  frenchWord: z
    .string({
      required_error: "The word is required",
      message: "The word must be a string",
    })
    .max(255, "Your word is too big"),
  englishWord: z
    .string({
      required_error: "The word is required",
      message: "The word must be a string",
    })
    .max(255, "Your word is too big"),
});
const addWord: FC = () => {
  type FormType = z.infer<typeof formSchema>;
  const { register, handleSubmit, formState } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });
  const router = useRouter();
  const { errors, isSubmitting, isValid } = formState;
  const addWordFormHandler: SubmitHandler<FormType> = async (data) => {
    const formData = {
      en: data.englishWord,
      fr: data.frenchWord,
    };
    const apiData = await (
      await fetch(BASE_URL+"/api/addword", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
    ).json();
    if (apiData) {
      router.push(BASE_URL+"/english/randomword");
    }
    console.log(formData, apiData);
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
                      htmlFor="french"
                      className="block mb-2 text-sm dark:text-white"
                    >
                      French Word
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="french"
                        className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        aria-describedby="word-error"
                        {...register("frenchWord")}
                      />
                      {errors.frenchWord ? (
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
                    {errors.frenchWord?.message ? (
                      <p className="mt-2 text-xs text-red-600" id="word-error">
                        Please include a valid word
                      </p>
                    ) : null}
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="english"
                      className="block mb-2 text-sm dark:text-white"
                    >
                      English Word
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="english"
                        className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        aria-describedby="word-error"
                        {...register("englishWord")}
                      />
                      {errors.englishWord ? (
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
                    {errors.englishWord?.message ? (
                      <p className="mt-2 text-xs text-red-600" id="word-error">
                        Please include a valid word
                      </p>
                    ) : null}
                  </div>
                  {/* End Form Group */}
                  <button
                    type="submit"
                    disabled={!(isValid || isSubmitting)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 disabled:cursor-not-allowed"
                  >
                    {isSubmitting && (
                      <span
                        className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                        role="status"
                        aria-label="loading"
                      ></span>
                    )}
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
