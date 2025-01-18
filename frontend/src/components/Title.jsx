import { Dot } from "lucide-react";
import React from "react";

const Title = ({ title }) => {
  return (
    <div className="flex items-center py-4 px-2">
      <div className="w-[8px] h-[8px] bg-neutral-700 rounded-full mr-3"></div>
      <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-lg">
        {title}
      </p>
    </div>
  );
};

export default Title;
