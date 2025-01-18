import { Copy } from "lucide-react";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const HireMe = ({ email }) => {
  const [copy, setCopy] = useState("Copy Email");
  const handleCopy = () => {
    setCopy("Email Copied!");
    setTimeout(() => {
      setCopy("Copy Email");
    }, "1000");
  };
  return (
    <CopyToClipboard text={email}>
      <a
        onClick={handleCopy}
        className="hover:cursor-pointer btn btn-ghost normal-case text-sm text-white dark:text-gray-300"
      >
        <div className="flex p-[7px] text-neutral-900 dark:text-neutral-300 dark:bg-neutral-800 border-2 border-gray-600 rounded-lg hover:outline-neutral-200 dark:hover:outline-neutral-900 hover:outline-4 hover:outline">
          <Copy className="w-4 mr-2" />
          {copy}
        </div>
      </a>
    </CopyToClipboard>
  );
};

export default HireMe;
