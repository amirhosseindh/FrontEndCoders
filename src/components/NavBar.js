import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import Logo from "../assets/img/logo.png";

const NavBar = () => {
  const [menuToggle, menuToggleHandler] = useState(false);
  const menuOpen = () => {
    menuToggleHandler(true);
  };
  const menuClose = () => {
    menuToggleHandler(false);
  };

  // theme
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    // NavBar
    // Menu
    <section className="w-full h-16 shadow-[0_8px_25px_rgba(0,0,0,0.25)] bg-white px-3 flex justify-between items-center rounded-2xl lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-2 dark:bg-blue-950">
      <ul className="hidden lg:flex lg:justify-center lg:gap-1">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-36 flex justify-center gap-2 px-2 py-2 rounded-[0.25rem] hover:bg-slate-100 hover:text-black dark:text-white dark:hover:bg-blue-700 ${
                isActive
                  ? "text-black bg-slate-100 dark:bg-blue-700"
                  : "text-slate-500"
              }`
            }
          >
            <svg
              className="w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
              />
            </svg>
            <span>صفحه اصلی</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `w-36 flex justify-center gap-2 px-2 py-2 rounded-[0.25rem] hover:bg-slate-100 hover:text-black dark:text-white dark:hover:bg-blue-700 ${
                isActive
                  ? "text-black bg-slate-100 dark:bg-blue-700"
                  : "text-slate-500"
              }`
            }
          >
            <svg
              class="w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
              />
            </svg>
            <span>خدمات</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `w-36 flex justify-center gap-2 px-2 py-2 rounded-[0.25rem] hover:bg-slate-100 hover:text-black dark:text-white dark:hover:bg-blue-700 ${
                isActive
                  ? "text-black bg-slate-100 dark:bg-blue-700"
                  : "text-slate-500"
              }`
            }
          >
            <svg
              className="w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span>درباره ما</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              `w-36 flex justify-center gap-2 px-2 py-2 rounded-[0.25rem] hover:bg-slate-100 hover:text-black dark:text-white dark:hover:bg-blue-700 ${
                isActive
                  ? "text-black bg-slate-100 dark:bg-blue-700"
                  : "text-slate-500"
              }`
            }
          >
            <svg
              className="w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
              />
            </svg>
            <span>تماس با ما</span>
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 mr-6 rounded-full transition-all duration-300"
          >
            {theme === "dark" ? (
              <svg
                class="w-6 h-6 text-yellow-400 rotate-180 transition-transform duration-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                />
              </svg>
            ) : (
              <svg
                class="w-6 h-6 transition-transform duration-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
                />
              </svg>
            )}
          </button>
        </li>
      </ul>

      {/* mobile menu */}
      <section onClick={menuOpen}>
        <svg
          className="cursor-pointer lg:hidden dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </section>

      <section
        className={`fixed left-0 top-0 w-screen min-h-screen z-40 bg-slate-500 opacity-50 lg:hidden ${
          !menuToggle && "hidden"
        }`}
        onClick={menuClose}
      ></section>
      <section
        className={`fixed top-0 right-0 w-72 min-h-screen z-50 bg-white dark:bg-blue-950 duration-500 transform ease-in-out px-5 lg:hidden ${
          menuToggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <section className="flex justify-center items-center">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 ml-6 rounded-full transition-all duration-300"
          >
            {theme === "dark" ? (
              <svg
                class="w-6 h-6 text-yellow-400 rotate-180 transition-transform duration-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                />
              </svg>
            ) : (
              <svg
                class="w-6 h-6 transition-transform duration-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
                />
              </svg>
            )}
          </button>

          <span className="dark:text-white">FrontEndCoders</span>
          <img className="w-20" src={Logo} alt="logo" />
        </section>

        <ul className="flex justify-center flex-col gap-5 text-right mt-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex gap-2 px-2 py-2 rounded-md hover:bg-slate-100 hover:text-black dark:text-white dark:hover:bg-blue-700 ${
                  isActive
                    ? "text-black bg-slate-100 dark:bg-blue-700"
                    : "text-slate-500"
                }`
              }
            >
              <svg
                className="w-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                />
              </svg>
              <span>صفحه اصلی</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `flex gap-2 px-2 py-2 rounded-md hover:bg-slate-100 hover:text-black dark:text-white dark:hover:bg-blue-700 ${
                  isActive
                    ? "text-black bg-slate-100 dark:bg-blue-700"
                    : "text-slate-500"
                }`
              }
            >
              <svg
                class="w-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                />
              </svg>
              <span>خدمات</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `flex gap-2 px-2 py-2 rounded-md hover:bg-slate-100 hover:text-black dark:text-white dark:hover:bg-blue-700 ${
                  isActive
                    ? "text-black bg-slate-100 dark:bg-blue-700"
                    : "text-slate-500"
                }`
              }
            >
              <svg
                className="w-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span>درباره ما</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                `flex gap-2 px-2 py-2 rounded-md hover:bg-slate-100 hover:text-black dark:text-white dark:hover:bg-blue-700 ${
                  isActive
                    ? "text-black bg-slate-100 dark:bg-blue-700"
                    : "text-slate-500"
                }`
              }
            >
              <svg
                className="w-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                />
              </svg>
              <span>تماس با ما</span>
            </NavLink>
          </li>
        </ul>
      </section>

      {/* logo */}
      <section className="flex justify-center items-center gap-2">
        <h1 className="dark:text-white">FrontEndCoders</h1>
        <img className="w-20" src={Logo} alt="logo" />
      </section>
    </section>
  );
};

export default NavBar;
