import React, { useEffect, useState } from "react";
import HireMe from "../HireMe";
import Copy from "../Copy";
import { Linkedin, Github, Instagram, Loader } from "lucide-react";

import axios from "axios";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://quotes-api-self.vercel.app/quote"
    );
    setQuote(response.data.quote);
    setAuthor(response.data.author);
    setLoading(false);
  };
  return (
    <div className="px-2 mt-10">
      <div className="w-full justify-self-center mb-10 bg-neutral-100 dark:bg-stone-700 rounded-lg p-4 shadow-lg shadow-neutral-stone-600">
        <div className="sm:flex justify-between">
          <div className="flex items-center">
            <div className="w-[8px] h-[8px] bg-neutral-500 rounded-full mr-3" />
            <p className="text-md sm:text-lg dark:text-neutral-300">
              Follow Me
            </p>
          </div>
          <div className="mt-2">
            <div className="justify-items-center w-full">
              <div className="w-[180px]">
                <div className="flex justify-between">
                  <a
                    href="https://www.linkedin.com/in/mr-kenneth-solomon/"
                    target="_blank"
                  >
                    <div className="bg-neutral-200 dark:bg-stone-800 rounded-full p-3 cursor-pointer hover:outline-neutral-200 dark:hover:outline-neutral-900 hover:outline-4 hover:outline">
                      <Linkedin className="dark:text-neutral-300" />
                    </div>
                  </a>
                  <a href="https://github.com/kennethsolomon" target="_blank">
                    <div className="bg-neutral-200 dark:bg-stone-800 rounded-full p-3 cursor-pointer hover:outline-neutral-200 dark:hover:outline-neutral-900 hover:outline-4 hover:outline">
                      <Github className="dark:text-neutral-300" />
                    </div>
                  </a>
                  <a
                    href="https://instagram.com/mr.kennethsolomon"
                    target="_blank"
                  >
                    <div className="bg-neutral-200 dark:bg-stone-800 rounded-full p-3 cursor-pointer hover:outline-neutral-200 dark:hover:outline-neutral-900 hover:outline-4 hover:outline">
                      <Instagram className="dark:text-neutral-300" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center font-bold text-3xl mb-3 dark:text-neutral-300">
        Let's work together.
      </p>
      <p className="text-center dark:text-neutral-300 mb-5">
        Let’s collaborate to build innovative, user-focused web applications
        that help your business thrive!
      </p>
      <div className="flex justify-center mb-10">
        <HireMe className="mr-4" />
        <Copy email="hello@kennethsolomon.com" />
      </div>
      {loading ? (
        <div className="flex justify-center mb-5">
          <Loader size={60} className="animate-spin dark:text-neutral-300" />
        </div>
      ) : (
        <div className="w-full justify-self-center mb-5 bg-neutral-100 dark:bg-stone-700 rounded-lg p-4 shadow-lg shadow-neutral-stone-600">
          <p className="text-2xl font-semibold dark:text-neutral-300 text-center mb-3">
            Quote of the Day 🧠
          </p>
          <div className="flex flex-col justify-center text-justify px-7">
            <p className="dark:text-neutral-300 mb-2">"{quote}"</p>
            <p className="dark:text-neutral-300 mb-5">- {author}</p>
          </div>
        </div>
      )}
      <p className="dark:text-neutral-300 text-center">
        © {new Date().getFullYear()} Kenneth Solomon
      </p>
    </div>
  );
};

export default Footer;
