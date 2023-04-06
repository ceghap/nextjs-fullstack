import PublicLayout from "@/components/layouts/PublicLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  message: z.string().min(10),
});

type Contact = z.infer<typeof contactSchema>;

const About = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <PublicLayout>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="format mx-auto max-w-3xl p-4">
        <div className="mx-auto flex h-full flex-col items-center justify-center px-6 py-8 lg:py-0">
          <div className="w-full rounded-lg bg-white sm:max-w-md md:mt-0 xl:p-0">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Contact Me
              </h1>
              <form onSubmit={onSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="first-name"
                    className={`mb-2 block text-sm font-medium ${
                      errors.firstName
                        ? "text-red-500 dark:text-red-600"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 ${
                      errors.firstName
                        ? "focus:border-red-500 focus:ring-red-500 dark:focus:border-red-500 dark:focus:ring-red-500"
                        : "focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    }  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400`}
                    placeholder="John"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.firstName?.message}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="last-name"
                    className={`mb-2 block text-sm font-medium ${
                      errors.lastName
                        ? "text-red-500 dark:text-red-600"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 ${
                      errors.lastName
                        ? "focus:border-red-500 focus:ring-red-500 dark:focus:border-red-500 dark:focus:ring-red-500"
                        : "focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    }  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400`}
                    placeholder="Doe"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.lastName?.message}
                    </p>
                  )}
                </div>
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
                    }  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400`}
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
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className={`mb-2 block text-sm font-medium ${
                      errors.message
                        ? "text-red-500 dark:text-red-600"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 ${
                      errors.message
                        ? "focus:border-red-500 focus:ring-red-500 dark:focus:border-red-500 dark:focus:ring-red-500"
                        : "focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    }  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400`}
                    placeholder="Write your message here"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.message?.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </PublicLayout>
  );
};

export default About;