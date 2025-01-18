import { FileDown } from "lucide-react";
import React from "react";

const HireMe = ({ ...props }) => {
  return (
    <a {...props}>
      <div className="flex p-2 dark:bg-neutral-700 bg-black rounded-lg hover:outline-neutral-200 dark:hover:outline-neutral-900 hover:outline-4 hover:outline">
        <FileDown className="w-4 mr-2" />
        View CV
      </div>
    </a>
  );
};

export default HireMe;
