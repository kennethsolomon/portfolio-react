import { BriefcaseBusiness } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const HireMe = ({ ...props }) => {
  return (
    <Link {...props} to="/contact">
      <a className="btn btn-ghost normal-case text-sm text-white dark:text-gray-300">
        <div className="flex p-2 dark:bg-neutral-700 bg-black rounded-lg hover:outline-neutral-200 dark:hover:outline-neutral-900 hover:outline-4 hover:outline">
          <BriefcaseBusiness className="w-4 mr-2" />
          Hire Me
        </div>
      </a>
    </Link>
  );
};

export default HireMe;
