import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.png";
import Phone from "../assets/img/phone.png";

const SideBar = () => {
  const [btnText, setBtnText] = useState("کپی ایمیل");
  const Email = "my.FrontEndCoders@gmail.com";

  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText(Email);

      setBtnText("کپی شد");

      setTimeout(() => {
        setBtnText("کپی ایمیل");
      }, 2000);
    } catch (err) {
      console.error("کپی نشد");
    }
  };

  return (
    <section className="w-full h-full shadow-[0_8px_25px_rgba(0,0,0,0.25)] bg-white rounded-2xl p-6 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4 dark:bg-blue-950 dark:text-white">
      <section className="w-full h-64 mx-auto mb-4 bg-slate-100 dark:bg-transparent rounded-lg flex justify-center items-center">
        <img
          className="w-3/4 max-w-[400px] object-cover"
          src={Logo}
          alt="logo"
        />
      </section>

      <h2 className="text-2xl font-semibold">
        تیم FrontEndCoders 👋🏻
      </h2>
      <p className="text-slate-500 text-justify mt-4 mb-10 leading-7 dark:text-slate-300">
        تیم ما با اشتیاق و تخصص در زمینه طراحی و توسعه وب، تولید محتوا، طراحی
        گرافیک و دیجیتال مارکتینگ فعالیت می‌کند. ما به دنبال ارائه راه‌حل‌های
        خلاقانه و کاربردی هستیم تا کسب‌وکارها و افراد بتوانند به اهداف خود دست
        پیدا کنند. خدمات ما شامل طراحی و بهینه‌سازی وب‌سایت، تولید محتوای جذاب،
        طراحی لوگو و هویت بصری، مدیریت شبکه‌های اجتماعی و مشاوره دیجیتال
        مارکتینگ است. هدف ما ایجاد تجربه‌ای ساده، حرفه‌ای و مؤثر برای مشتریان
        است و همیشه تلاش می‌کنیم پروژه‌ها را با کیفیت بالا و در زمان مقرر تحویل
        دهیم.
      </p>

      <section className="flex gap-4">
        <button className="w-[50%] max-w-40 bg-blue-700 hover:bg-blue-800 transition rounded-lg text-white text-lg">
          <Link
            to="/contactus"
            className="flex justify-center items-center gap-2 px-5 py-4"
          >
            <img src={Phone} alt="contactus" />
            <span>تماس با ما</span>
          </Link>
        </button>
        <button
          className="w-[50%] max-w-40 border border-slate-100 rounded-lg text-lg flex justify-center items-center gap-2 px-5 py-4 hover:bg-slate-100 dark:border-blue-900 dark:hover:bg-blue-700"
          onClick={copyHandler}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{btnText}</span>
        </button>
      </section>
    </section>
  );
};

export default SideBar;
