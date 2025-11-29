import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full h-full flex flex-col gap-6 shadow-[0_8px_25px_rgba(0,0,0,0.25)] bg-white p-6 rounded-2xl lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-4 dark:bg-blue-950 dark:text-white">
      <h3 className="text-3xl font-semibold">درباره ما</h3>

      <section className="flex flex-col gap-6 md:flex-row">
        <section className="flex flex-col justify-center gap-4">
          <h4 className="text-lg font-semibold text-justify">
            امیرحسین دهقانی | طراح سایت، طراح UI/UX و طراح لوگو
          </h4>
          <p className="text-justify text-slate-500 leading-7 dark:text-slate-300">
            من متخصص طراحی و توسعه وب سایت با تجربه در برنامه نویسی اختصاصی و
            وردپرس هستم. ترکیب دانش فنی در حوزه طراحی سایت با مهارت در طراحی
            رابط و تجربه کاربری (UI/UX)، به من این امکان را داده تا پروژه هایی
            خلق کنم که هم از نظر عملکرد و هم از نظر زیبایی شناسی، در سطح بالایی
            قرار دارند. همچنین در زمینه طراحی لوگو و هویت بصری نیز فعالیت دارم و
            تلاش می کنم با ارائه راه حل های خلاقانه، به برندها در ایجاد حضور
            حرفه ای در فضای دیجیتال کمک کنم.
          </p>
        </section>
      </section>

      <section className="flex flex-col gap-6 mt-6 md:flex-row">
        <section className="flex flex-col justify-center gap-4">
          <h4 className="text-lg font-semibold text-justify">
            آیدین روحی | طراح سایت و متخصص SEO
          </h4>
          <p className="text-justify text-slate-500 leading-7 dark:text-slate-300">
            من یک طراح سایت و متخصص سئو هستم. تمرکزم روی طراحی وب سایت های مدرن،
            کاربردی و کاملاً بهینه شده برای موتورهای جستجوست؛ وب سایت هایی که هم
            ظاهر حرفه ای دارند و هم عملکرد مناسبی برای رشد کسب وکارها ارائه می
            کنند. با استفاده از دانش طراحی و تجربه در زمینه سئو، سعی می کنم
            فضایی آنلاین ایجاد کنم که هم برای کاربران جذاب باشد و هم از نظر گوگل
            و سایر موتورهای جستجو قابل اعتماد.
          </p>
        </section>
      </section>
    </section>
  );
};

export default AboutUs;
