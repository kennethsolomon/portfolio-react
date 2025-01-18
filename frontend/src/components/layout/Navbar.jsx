import { AppWindow, CircleUserRound, House, MoonStar, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HireMe from "../HireMe";

const Navbar = ({ setTheme }) => {
  const [active, setActive] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === localStorage.page) {
      setActive(localStorage.page);
    }
  }, [pathname]);

  const handleThemeChange = () => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    window.dispatchEvent(new Event("storage"));
    setTheme(localStorage.theme);
  };

  const handleActivePage = (page) => {
    localStorage.page = page;
  };

  return (
    <div className="flex justify-center items-center h-16 sticky top-3">
      <div className="grid grid-cols-12 rounded-xl p-4 w-full max-w-[560px] dark:bg-neutral-800 bg-white">
        {/* Pages */}
        <div className="flex sm:col-span-2 col-span-4 self-center">
          <Link to="/" title="Home" onClick={() => handleActivePage("/")}>
            <div className="navbar bg-base-100 mr-4">
              <a className="btn btn-ghost normal-case text-xl dark:text-gray-300">
                <div className="relative flex items-center justify-center left-4">
                  <div
                    className={
                      active === "/"
                        ? "absolute w-9 h-9  bg-green-200 rounded-full opacity-[0.5] dark:opacity-5"
                        : ""
                    }
                  ></div>
                  <div className="absolute">
                    <House />
                  </div>
                </div>
              </a>
            </div>
          </Link>
          <Link
            to="/about"
            title="About"
            onClick={() => handleActivePage("/about")}
          >
            <div className="navbar bg-base-100 mr-4">
              <a className="btn btn-ghost normal-case text-xl dark:text-gray-300">
                <div className="relative flex items-center justify-center left-12">
                  <div
                    className={
                      active === "/about"
                        ? "absolute w-9 h-9  bg-green-200 rounded-full opacity-[0.5] dark:opacity-5"
                        : ""
                    }
                  ></div>
                  <div className="absolute">
                    <CircleUserRound />
                  </div>
                </div>
              </a>
            </div>
          </Link>
        </div>

        <div className="sm:col-span-7 col-span-2"></div>

        {/* Utilities */}
        <div className="flex justify-end sm:col-span-3 col-span-6 cursor-pointer">
          <div className="navbar bg-base-100 mr-4 self-center">
            <a
              onClick={handleThemeChange}
              className="btn btn-ghost normal-case text-xl dark:text-gray-300"
            >
              {localStorage.theme === "dark" ? <Sun /> : <MoonStar />}
            </a>
          </div>
          <HireMe />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
