import React from "react";

const Status = () => {
  return (
    <div className="flex justify-end">
      <div className="hidden sm:block">
        <div className="relative flex items-center justify-center w-[170px] h-6">
          <div className="absolute left-2 w-[6px] h-[6px] bg-green-500 rounded-full"></div>
          <div className="absolute right-3 text-xs text-green-700 dark:text-green-700 font-bold">
            AVAILABLE FOR WORK
          </div>
          <div className="w-[170px] h-6 bg-green-200 rounded-full opacity-[0.5] dark:opacity-5"></div>
        </div>
      </div>

      <div className="sm:hidden">
        <div className="relative flex items-center justify-center w-24 h-6">
          <div className="absolute right-1 w-5 h-5 bg-green-200 rounded-full opacity-[0.5] dark:opacity-5"></div>
          <div className="absolute w-[6px] right-[11px] h-[6px] bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Status;
