import React from "react";

import Faq from "./Faq";
import logodesignIcon from "../assets/img/Logo_design.svg";
import seoIcon from "../assets/img/Seo.svg";
import uiuxIcon from "../assets/img/Ui_Ux.svg";
import webdevelopmentIcon from "../assets/img/Web_Development.svg";
import QuestionPic from "../assets/img/Questions.svg";

const Services = () => {
  return (
    <section className="w-full h-full flex flex-col gap-6 shadow-[0_8px_25px_rgba(0,0,0,0.25)] bg-white p-6 rounded-2xl lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-5 dark:bg-blue-950 dark:text-white">
      <h3 className="text-3xl font-semibold">خدمات تیم FrontEndCoders</h3>
      <p className="text-lg text-justify text-slate-500 md:text-[19px] dark:text-slate-300">
        تیم FrontEndCoders در 4 زمینه مختلف اما مرتبط باهم خدماتی بی همتا ارائه
        میکند که مهم ترین آن طراحی سایت است.
      </p>
      <section className="mt-4 flex flex-wrap gap-5 justify-between items-center">
        <section className="w-[45%] flex flex-col items-center rounded-xl bg-slate-100 p-4 xl:w-[22%] dark:bg-blue-700">
          <section className="w-full h-40 rounded-lg bg-white p-6">
            <img
              className="object-contain w-full h-full"
              src={uiuxIcon}
              alt="ui/ux"
            />
          </section>
          <p className="mt-2 text-[0.8rem] md:text-lg">طراحی UI/UX</p>
        </section>
        <section className="w-[45%] flex flex-col items-center rounded-xl bg-slate-100 p-4 xl:w-[22%] dark:bg-blue-700">
          <section className="w-full h-40 rounded-lg bg-white p-6">
            <img
              className="object-contain w-full h-full"
              src={webdevelopmentIcon}
              alt="web_design"
            />
          </section>
          <p className="mt-2 text-[0.8rem] md:text-lg">طراحی سایت</p>
        </section>
        <section className="w-[45%] flex flex-col items-center rounded-xl bg-slate-100 p-4 xl:w-[22%] dark:bg-blue-700">
          <section className="w-full h-40 rounded-lg bg-white p-6">
            <img
              className="object-contain w-full h-full"
              src={seoIcon}
              alt="seo"
            />
          </section>
          <p className="mt-2 text-[0.8rem] md:text-lg">سئو</p>
        </section>
        <section className="w-[45%] flex flex-col items-center rounded-xl bg-slate-100 p-4 xl:w-[22%] dark:bg-blue-700">
          <section className="w-full h-40 rounded-lg bg-white p-6">
            <img
              className="object-contain w-full h-full"
              src={logodesignIcon}
              alt="logo_design"
            />
          </section>
          <p className="mt-2 text-[0.8rem] md:text-lg">طراحی لوگو</p>
        </section>
      </section>

      <section className="w-full h-60 bg-slate-100 dark:bg-transparent rounded-xl md:h-80 lg:h-96">
        <img
          className="w-full h-full object-contain"
          src={QuestionPic}
          alt="Question_Picture"
        />
      </section>

        <Faq/>
    </section>
  );
};

export default Services;
