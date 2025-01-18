import { useEffect, useState } from "react";

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={localStorage.theme}>
      <div className="py-6 px-2 min-h-screen bg-neutral-100 dark:bg-neutral-900">
        <Navbar setTheme={setTheme} />

        <div className="flex justify-center mt-5">
          <div className="w-full px-5 py-3 max-w-[560px] rounded-2xl dark:bg-neutral-800 bg-white">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
