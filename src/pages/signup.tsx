import Spinner from "@/components/Spinner";
import PublicLayout from "@/components/layouts/PublicLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";

const registerSchema = z
  .object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z.string().optional(),
    confirmPassword: z.string().optional(),
    haspassword: z.boolean().default(true),
    terms: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  })
  .refine(
    ({ haspassword, password }) => {
      if (haspassword && !password) {
        return false;
      }
      return true;
    },
    {
      path: ["password"],
      message: "Password is required",
    }
  )
  .refine(
    ({ haspassword, password }) => {
      if (haspassword && password && password.length < 6) {
        return false;
      }
      return true;
    },
    {
      path: ["password"],
      message: "Password must be at least 6 characters",
    }
  )
  .refine(
    ({ haspassword, terms }) => {
      if (haspassword && !terms) {
        return false;
      }
      return true;
    },
    {
      path: ["terms"],
      message: "You must accept Terms and Conditions",
    }
  );

type Register = z.infer<typeof registerSchema>;

const createAccount = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

export default function Signup() {
  const { mutate, isLoading } = useMutation({
    mutationFn: createAccount,
    onSuccess() {
      alert("success");
    },
    onError() {
      alert("error");
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<Register>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = handleSubmit(async ({ haspassword, password, email }) => {
    if (haspassword) {
      if (email && password) {
        mutate({ email, password });
      }
    } else {
      await signIn("email", {
        email,
        callbackUrl: "/protected",
      });
    }
  });

  return (
    <PublicLayout>
      <Head>
        <title>Nextjs fullstack</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {(isSubmitting || isLoading) && <Spinner />}

      <main className="flex justify-center p-4">
        <section className="w-full dark:bg-gray-900">
          <div className="mx-auto flex h-full flex-col items-center justify-center px-6 py-8 lg:py-0">
            <div className="w-full rounded-lg bg-white sm:max-w-md md:mt-0 xl:p-0">
              <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                  Sign up for an account
                </h1>

                <form onSubmit={onSubmit} className="flex flex-col">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className={`mb-2 block text-sm font-medium ${
                        errors.email
                          ? "text-red-500 dark:text-red-600"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 ${
                        errors.email
                          ? "focus:border-red-500 focus:ring-red-500 dark:focus:border-red-500 dark:focus:ring-red-500"
                          : "focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      }  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 `}
                      placeholder="john.doe@company.com"
                      required
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                  {watch("haspassword") && (
                    <>
                      <div className="mb-6">
                        <label
                          htmlFor="password"
                          className={`mb-2 block text-sm font-medium ${
                            errors.password
                              ? "text-red-500 dark:text-red-600"
                              : "text-gray-900 dark:text-white"
                          }`}
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 ${
                            errors.password
                              ? "focus:border-red-500 focus:ring-red-500 dark:focus:border-red-500 dark:focus:ring-red-500"
                              : "focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          }  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 `}
                          placeholder="•••••••••"
                          required
                          {...register("password")}
                        />
                        {errors.password && (
                          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                            {errors.password?.message}
                          </p>
                        )}
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="confirm_password"
                          className={`mb-2 block text-sm font-medium ${
                            errors.confirmPassword
                              ? "text-red-500 dark:text-red-600"
                              : "text-gray-900 dark:text-white"
                          }`}
                        >
                          Confirm password
                        </label>
                        <input
                          type="password"
                          id="confirm_password"
                          className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 ${
                            errors.confirmPassword
                              ? "focus:border-red-500 focus:ring-red-500 dark:focus:border-red-500 dark:focus:ring-red-500"
                              : "focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          }  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 `}
                          placeholder="•••••••••"
                          required
                          {...register("confirmPassword")}
                        />
                        {errors.confirmPassword && (
                          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                            {errors.confirmPassword?.message}
                          </p>
                        )}
                      </div>
                      <div className="mb-6 ">
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="remember"
                              type="checkbox"
                              value=""
                              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                              required
                              {...register("terms")}
                            />
                          </div>
                          <label
                            htmlFor="remember"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            I agree with the{" "}
                            <Link
                              href="/terms-and-conditions"
                              className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                              terms and conditions
                            </Link>
                            .
                          </label>
                        </div>
                        {errors.terms && (
                          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                            {errors.terms?.message}
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  <div className="mb-6 ">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="isnotpasswordless"
                          type="checkbox"
                          value=""
                          className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                          {...register("haspassword")}
                        />
                      </div>
                      <label
                        htmlFor="isnotpasswordless"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        I want to set password
                      </label>
                    </div>
                  </div>

                  <button
                    disabled={!isDirty || !isValid || isSubmitting}
                    type="submit"
                    className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-75 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                  >
                    {watch("haspassword")
                      ? "Submit"
                      : "Sign up with magic link"}
                  </button>
                </form>

                <label className="mt-4 text-center text-sm font-medium text-gray-900 dark:text-gray-300">
                  Already have an account?{" "}
                  <Link
                    href="/signin"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Sign in
                  </Link>
                  .
                </label>

                <hr />

                <button
                  className="flex w-full items-center justify-center space-x-2 rounded-md border p-2"
                  onClick={() =>
                    signIn("google", { callbackUrl: "/protected" })
                  }
                >
                  <FcGoogle /> <span>Sign up with Google</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
