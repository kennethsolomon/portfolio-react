import React from "react";
import Title from "../components/Title";
import Status from "../components/Status";
import { useState } from "react";
import { motion } from "framer-motion";

import axios from "axios";
import toast from "react-hot-toast";
import Footer from "../components/layout/Footer";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!name || !email || !message) {
        toast.error("Please fill in all fields.");
        return;
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        toast.error("Email is invalid.");
        return;
      }

      const response = await axios.post(
        "https://hello.kennethsolomon.com/api/send-email",
        {
          name,
          email,
          message,
        }
      );

      if (response.status === 200) {
        toast.success("Email sent successfully");
      } else {
        toast.error("Something went wrong.");
      }

      formReset();
    } catch (error) {
      if (error.response) {
        toast.error("Server Error");
        console.log("Server Error: ", error.response.data);
      } else if (error.request) {
        toast.error("Network Error");
        console.log("Network Error: ", error.response.data);
      } else {
        toast.error("Error: " + error.message);
        console.log("Error: ", error.response?.data);
      }
    }
  };

  const formReset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <Title title="Hire Me" />
        <Status />
      </div>
      <div className="px-2 py-4 mb-5">
        <p className="text-4xl font-semibold text-neutral-800 dark:text-neutral-200 mb-5">
          Service Inquiry
        </p>
        <p className="leading-7 text-neutral-600 dark:text-neutral-300">
          Want to work with me? Let's get in touch!
        </p>
      </div>
      <div className="sm:flex sm:justify-between px-2">
        <input
          type="text"
          className="dark:text-neutral-300 focus:outline-none focus:ring-2 ring-neutral-400 bg-neutral-100 dark:bg-stone-700 h-12 p-4 rounded-md w-full sm:w-[49%] mb-3 sm:mb-0"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          className="dark:text-neutral-300 focus:outline-none focus:ring-2 ring-neutral-400 bg-neutral-100 dark:bg-stone-700 h-12 p-4 rounded-md w-full sm:w-[49%] mb-3 sm:mb-0"
          placeholder="Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="sm:flex sm:justify-between px-2 sm:mt-3">
        <textarea
          className="dark:text-neutral-300 focus:outline-none focus:ring-2 ring-neutral-400 bg-neutral-100 dark:bg-stone-700 p-4 rounded-md w-full"
          name="test"
          rows="6"
          placeholder="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
      </div>
      <div className="sm:flex sm:justify-between px-2">
        <button
          onClick={handleSubmit}
          className="bg-neutral-600 dark:hover:outline-0 dark:hover:bg-neutral-700 dark:bg-neutral-600 w-full mt-2 sm:mt-3 rounded-md h-12 text-neutral-100 hover:outline-neutral-200 hover:outline-4 hover:outline"
        >
          <p className="font-semibold">Submit</p>
        </button>
      </div>
      <Footer />
    </motion.div>
  );
};

export default ContactPage;
