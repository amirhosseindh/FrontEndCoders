import React, { useState } from "react";
import { Link } from "react-router-dom";

import figmaIcon from "../assets/img/figma.png";
import photoshopIcon from "../assets/img/photoshop.png";
import reactIcon from "../assets/img/react.png";
import sassIcon from "../assets/img/sass.png";
import tailwindcssIcon from "../assets/img/tailwindcss.png";
import wordpressIcon from "../assets/img/wordpress.png";
import logodesignIcon from "../assets/img/Logo_design.svg";
import seoIcon from "../assets/img/Seo.svg";
import uiuxIcon from "../assets/img/Ui_Ux.svg";
import webdevelopmentIcon from "../assets/img/Web_Development.svg";
import project1 from "../assets/projects_pictures/frontendcoders.png";

const Home = () => {
  const slides = [
    {
      name: "FrontEndCoders",
      pic: project1,
    },
  ];
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* recently projects */}
      <section className="w-full h-full shadow-[0_8px_25px_rgba(0,0,0,0.25)] bg-white rounded-2xl p-6 lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3 dark:bg-blue-950 dark:text-white">
        <h3 className="text-2xl font-semibold">پروژه های اخیر</h3>

        <section className="w-full mt-6 relative flex flex-col items-center">
          <a
            href="www.frontendcoders.ir"
            className="w-full h-full flex flex-col items-center gap-2"
          >
            <img
              src={slides[index].pic}
              alt="slide"
              className="w-full h-64 object-cover object-top rounded-lg cursor-pointer hover:opacity-80"
            />
            <p className="text-lg cursor-pointer">{slides[index].name}</p>
          </a>

          <section className="absolute top-[-5%] w-full h-full px-2 flex justify-between items-center">
            <button
              onClick={next}
              className="bg-white/80 p-2 rounded-full shadow dark:bg-blue-700"
            >
              <svg
                class="w-6 h-6"
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
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>
            <button
              onClick={prev}
              className="bg-white/80 p-2 rounded-full shadow dark:bg-blue-700"
            >
              <svg
                class="w-6 h-6"
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
                  d="m15 19-7-7 7-7"
                />
              </svg>
            </button>
          </section>
        </section>
      </section>

      {/* skills */}
      <section className="w-full h-full shadow-[0_8px_25px_rgba(0,0,0,0.25)] bg-white rounded-2xl p-6 lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-4 dark:bg-blue-950 dark:text-white">
        <h3 className="text-2xl font-semibold">تکنولوژی ها</h3>

        <section className="flex flex-wrap justify-center items-center mt-4 gap-4">
          <section className="flex flex-col w-[48%] justify-center items-center md:w-[30%]">
            <section className="rounded-lg bg-light p-3">
              <img
                src={figmaIcon}
                alt="figma"
                className="w-[30%] max-w-[200px] mx-auto"
              />
            </section>
            <p className="mt-1 text-lg font-medium">Figma</p>
          </section>
          <section className="flex flex-col w-[45%] justify-center items-center md:w-[30%]">
            <section className="rounded-lg bg-light p-3">
              <img
                src={photoshopIcon}
                alt="photoshop"
                className="w-[30%] max-w-[200px] mx-auto"
              />
            </section>
            <p className="mt-1 text-lg font-medium">Photoshop</p>
          </section>
          <section className="flex flex-col w-[45%] justify-center items-center md:w-[30%]">
            <section className="rounded-lg bg-light p-3">
              <img
                src={wordpressIcon}
                alt="wordpress"
                className="w-[30%] max-w-[200px] mx-auto"
              />
            </section>
            <p className="mt-1 text-lg font-medium">Wordpress</p>
          </section>
          <section className="flex flex-col w-[45%] justify-center items-center md:w-[30%]">
            <section className="rounded-lg bg-light p-3">
              <img
                src={sassIcon}
                alt="sass"
                className="w-[30%] max-w-[200px] mx-auto"
              />
            </section>
            <p className="mt-1 text-lg font-medium">Sass</p>
          </section>
          <section className="flex flex-col w-[45%] justify-center items-center md:w-[30%]">
            <section className="rounded-lg bg-light p-3">
              <img
                src={tailwindcssIcon}
                alt="tailwind"
                className="w-[30%] max-w-[200px] mx-auto"
              />
            </section>
            <p className="mt-1 text-lg font-medium">Tailwind</p>
          </section>
          <section className="flex flex-col w-[45%] justify-center items-center md:w-[30%]">
            <section className="rounded-lg bg-light p-3">
              <img
                src={reactIcon}
                alt="react"
                className="w-[30%] max-w-[200px] mx-auto"
              />
            </section>
            <p className="mt-1 text-lg font-medium">React</p>
          </section>
        </section>
      </section>

      {/* services */}
      <section className="w-full h-full shadow-[0_8px_25px_rgba(0,0,0,0.25)] bg-white rounded-2xl p-6 lg:col-start-1 lg:col-end-4 lg:row-start-4 lg:row-end-5 dark:bg-blue-950 dark:text-white">
        <section className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-2xl font-semibold">خدمات ما</h3>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary"
          >
            <span> همه ی خدمات </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              className="h-5 w-5"
            >
              <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
            </svg>
          </Link>
        </section>

        <section className="mt-4 flex flex-wrap gap-5 justify-center items-center">
          <section className="flex flex-col items-center w-full rounded-xl bg-slate-100 dark:bg-blue-700 p-4 md:w-[48%] lg:w-[23%]">
            <section className="w-full h-52 rounded-lg bg-white p-6">
              <img
                className="object-contain w-full h-full"
                src={uiuxIcon}
                alt="ui/ux"
              />
            </section>
            <p className="mt-2 text-lg font-medium">طراحی رابط کاربری</p>
          </section>
          <section className="flex flex-col items-center w-full rounded-xl bg-slate-100 dark:bg-blue-700 p-4 md:w-[48%] lg:w-[23%]">
            <section className="w-full h-52 rounded-lg bg-white p-6">
              <img
                className="object-contain w-full h-full"
                src={webdevelopmentIcon}
                alt="web_design"
              />
            </section>
            <p className="mt-2 text-lg font-medium">طراحی سایت</p>
          </section>
          <section className="flex flex-col items-center w-full rounded-xl bg-slate-100 dark:bg-blue-700 p-4 md:w-[48%] lg:w-[23%]">
            <section className="w-full h-52 rounded-lg bg-white p-6">
              <img
                className="object-contain w-full h-full"
                src={seoIcon}
                alt="seo"
              />
            </section>
            <p className="mt-2 text-lg font-medium">سئو</p>
          </section>
          <section className="flex flex-col items-center w-full rounded-xl bg-slate-100 dark:bg-blue-700 p-4 md:w-[48%] lg:w-[23%]">
            <section className="w-full h-52 rounded-lg bg-white p-6">
              <img
                className="object-contain w-full h-full"
                src={logodesignIcon}
                alt="logo_design"
              />
            </section>
            <p className="mt-2 text-lg font-medium">طراحی لوگو</p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
