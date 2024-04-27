import Link from 'next/link';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

const Login: FC = () => {
  const formSchema = z.object({
    email: z
      .string({
        required_error: "The email is required",
        message: "The email must be a string",
      })
      .email({ message: "The email is invalid" })
      .max(255, "Your email is too big"),
    password: z
      .string({
        required_error: "The password is required",
        message: "The password must be a string",
      })
      .min(8, "At least 8 character for the password"),
  });
  type FormType = z.infer<typeof formSchema>;
  const { register, handleSubmit, formState } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });
  const { errors, isSubmitting, isValid } = formState;
  const loginFormHandler: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };
  return (
    <>
      <main className="w-full max-w-md p-6 mx-auto">
        <div className="bg-white border border-gray-200 shadow-sm mt-7 rounded-xl dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Se connecter
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Vous n'avez pas de compte ?
                <Link
                  className="font-medium text-blue-600 decoration-2 hover:underline"
                  href="/register"
                >
                  Créez-en-un
                </Link>
              </p>
            </div>
            <div className="mt-5">
              {/* Form */}
              <form onSubmit={handleSubmit(loginFormHandler)} method="POST">
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        aria-describedby="email-error"
                        {...register("email")}
                      />
                      {errors.email ? (
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
                    {errors.email?.message ? (
                      <p className="mt-2 text-xs text-red-600" id="email-error">
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    ) : null}
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm dark:text-white"
                      >
                        Password
                      </label>
                      <Link
                        className="text-sm font-medium text-blue-600 decoration-2 hover:underline"
                        href="/forget-password"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        aria-describedby="password-error"
                        {...register("password")}
                      />
                      {errors.email ? (
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
                    {errors.password?.message ? (
                      <p
                        className="mt-2 text-xs text-red-600"
                        id="password-error"
                      >
                        8+ characters required
                      </p>
                    ) : null}
                  </div>
                  {/* End Form Group */}
                  {/* Checkbox */}
                  <div className="flex items-center">
                    <div className="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3">
                      <label
                        htmlFor="remember-me"
                        className="text-sm dark:text-white"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  {/* End Checkbox */}
                  <button
                    type="submit"
                    disabled={!(isValid || isSubmitting)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 disabled:cursor-not-allowed"
                  >
                    Sign in
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
export default Login;
