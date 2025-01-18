import React from "react";
import Title from "../components/Title";
import Memoji404 from "../assets/memoji-404.png";
import { Link, Navigate } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <Title title="Oopps! 404" />
      <div className="pt-10 pb-3">
        <div className="justify-self-center w-[200px]">
          <img
            className="border-2 bg-neutral-100 border-stone-50 rounded-full"
            src={Memoji404}
            alt="404"
          />
        </div>
        <p className="text-center sm:text-4xl text-3xl font-semibold text-neutral-800 dark:text-neutral-200 mt-10 mb-5">
          Page not found.
        </p>
        <p className="text-center leading-7 text-neutral-600 dark:text-neutral-300">
          The page you're looking for doesn't exist.
        </p>
        <div className="flex justify-center mt-5">
          <Link
            to="/"
            className="hover:cursor-pointer btn btn-ghost normal-case text-sm text-white dark:text-gray-300"
          >
            <div className="flex p-[7px] text-neutral-900 dark:text-neutral-300 dark:bg-neutral-800 border-2 border-gray-600 rounded-lg">
              Back to Home
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
