import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Title from "../components/Title";
import Status from "../components/Status";
import MemojiLight from "../assets/memoji-light.png";
import MemojiDark from "../assets/memoji-dark.png";
import CV from "../components/CV";
import Copy from "../components/Copy";
import Footer from "../components/layout/Footer";

const HomePage = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setTheme(theme);

    window.addEventListener("storage", () => {
      const theme = localStorage.getItem("theme");
      setTheme(theme);
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <Title title="Software Engineer" />
        <Status />
      </div>
      <div className="grid sm:grid-cols-12 mb-5">
        <div className="self-center sm:col-span-7 px-2 order-last mt-4 sm:mt-0 sm:order-first">
          <p className="font-semibold text-center sm:text-start text-4xl text-neutral-800 dark:text-neutral-200 mb-2">
            I'm Kenneth
          </p>
          <p className="text-center sm:text-start text-neutral-600 dark:text-neutral-300 mb-5">
            Software Engineer from Philippines. Currently a developer at
            phCollab.
          </p>
          <div className="flex justify-center sm:justify-start">
            <CV
              href="https://kennethsolomon.com/resume.pdf"
              target="_blank"
              className="mr-4 btn btn-ghost normal-case text-sm text-white dark:text-gray-300"
            />
            <Copy email="contact@kennethsolomon.com" />
          </div>
        </div>
        <div className="flex justify-center sm:col-span-5">
          <img
            className="h-[180px]"
            src={theme === "dark" ? MemojiDark : MemojiLight}
            alt="profile"
          />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default HomePage;
