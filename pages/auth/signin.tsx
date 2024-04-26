import Link from 'next/link';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

type FormType = {
  username: string;
  email: string;
  password: string;
  rememberMe: string;
};
const SignIn: FC = () => {
  const { register, handleSubmit, formState } = useForm<FormType>();
  const errors = formState.errors;

  const submitForm = (data: any) => {
    console.log(data);
  };
  return (
    <main className="w-full max-w-md p-6 mx-auto">
      <div className="bg-white border border-gray-200 shadow-sm mt-7 rounded-xl dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              S'inscrire
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Vous avez un compte ?
              <Link
                className="font-medium text-blue-600 decoration-2 hover:underline"
                href="/register"
              >
                connectez-vous
              </Link>
            </p>
          </div>
          <div className="mt-5">
            {/* Form */}
            <form method="POST" onSubmit={handleSubmit(submitForm)}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm dark:text-white"
                  >
                    Username
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="username"
                      className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      aria-describedby="username-error"
                      {...register("username", { required: true })}
                    />
                    {errors.username ? (
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
                  {errors?.username?.type === "required" ? (
                    <p className="mt-2 text-xs text-red-600" id="email-error">
                      Please include a valid username
                    </p>
                  ) : null}
                </div>
                {/* End Form Group */}
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
                      {...register("email", {
                        required: true,
                        maxLength: 255,
                        pattern: /^\S+@\S+\.\S+$/,
                      })}
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
                  {errors.email?.type === "pattern" ? (
                    <p className="mt-2 text-xs text-red-600" id="email-error">
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  ) : null}
                  {errors.email?.type === "required" ? (
                    <p className="mt-2 text-xs text-red-600" id="email-error">
                      Add an email address so we can get back to you
                    </p>
                  ) : null}

                  {errors.email?.type === "maxLength" ? (
                    <p
                      className="hidden mt-2 text-xs text-red-600"
                      id="email-error"
                    >
                      Your email address is so big, reduce it please
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
                      {...register("password", {
                        required: true,
                        minLength: 8,
                      })}
                    />
                    {errors.password ? (
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

                  {errors.password?.type === "required" ? (
                    <p
                      className="mt-2 text-xs text-red-600"
                      id="password-error"
                    >
                      Password required
                    </p>
                  ) : null}
                  {errors.password?.type === "minLength" ? (
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
                      id="rememberMe"
                      {...register("rememberMe", {})}
                      type="checkbox"
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3">
                    <label
                      htmlFor="rememberMe"
                      className="text-sm dark:text-white"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                {/* End Checkbox */}
                <button
                  disabled={formState.isValid}
                  type="submit"
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
  );
};
export default SignIn;
