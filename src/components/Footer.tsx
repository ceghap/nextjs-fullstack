import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 right-0 border-t bg-white p-4 dark:bg-gray-800 md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          HappyGoDorky
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Just another nextjs fullstack template.
        </p>
        <ul className="mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
          <li>
            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="mr-4 hover:underline md:mr-6">
              Contact
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2022-2023{" "}
          <a href="#" className="hover:underline">
            HappyGoDorky™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
