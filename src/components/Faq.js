import React, { useState } from "react";

import questionIcon from "../assets/img/question-mark.png";
import timeIcon from "../assets/img/hourglass.png";
import moneyIcon from "../assets/img/money.png";
import designIcon from "../assets/img/web-design.png";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const data = [
    {
      icon: questionIcon,
      q: "شما چه خدماتی ارائه می‌دید؟",
      a: "ما خدمات طراحی سایت، توسعه رابط کاربری (UI/UX)، ساخت لندینگ‌پیج، سئو، و بهینه‌سازی سرعت سایت ارائه می‌دهیم. همچنین امکان پشتیبانی و بروزرسانی کامل پروژه‌ها نیز وجود دارد.",
    },
    {
      icon: timeIcon,

      q: "چقدر زمان می‌بره تا سایت آماده بشه؟",
      a: "زمان تحویل پروژه بسته به نوع سایت متغیر است. بعد از بررسی دقیق نیازهای شما زمان دقیق اعلام می‌شود.",
    },
    {
      icon: moneyIcon,
      q: "هزینه طراحی سایت چطور محاسبه می‌شه؟",
      a: "هزینه‌ها براساس نوع پروژه، ویژگی‌های موردنظر، طراحی اختصاصی یا آماده، و سطح سئو محاسبه می‌شود. بعد از دریافت جزئیات یک برآورد دقیق ارائه می‌کنیم.",
    },
    {
      icon: designIcon,
      q: "آیا می‌تونید سایت قبلی من رو اصلاح یا بازطراحی کنید؟",
      a: "بله. امکان ریدیزاین کامل، بهبود سرعت، رفع باگ‌ها و بهینه‌سازی سئو وجود دارد.",
    },
  ];

  return (
    <section className="flex flex-col gap-6 dark:text-white">
      <h4 className="text-2xl">سوالات متدوال</h4>

      <section className="space-y-4">
        {data.map((it, i) => {
          const isOpen = openIndex === i;
          return (
            <section
              key={i}
              className="rounded-xl border border-slate-100 bg-white dark:bg-blue-950 dark:border-blue-900 overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    const next = (i + 1) % data.length;
                    const btn =
                      document.querySelectorAll("[data-acc-btn]")[next];
                    btn?.focus();
                  }
                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    const prev = (i - 1 + data.length) % data.length;
                    const btn =
                      document.querySelectorAll("[data-acc-btn]")[prev];
                    btn?.focus();
                  }
                  if (e.key === "Home") {
                    e.preventDefault();
                    const btn = document.querySelectorAll("[data-acc-btn]")[0];
                    btn?.focus();
                  }
                  if (e.key === "End") {
                    e.preventDefault();
                    const btns = document.querySelectorAll("[data-acc-btn]");
                    btns[btns.length - 1]?.focus();
                  }
                }}
                aria-expanded={isOpen}
                aria-controls={`acc-panel-${i}`}
                id={`acc-btn-${i}`}
                data-acc-btn
                className="w-full flex items-center justify-between px-5 py-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
              >
                <section className="flex items-center gap-4">
                  <img className="w-7" src={it.icon} alt="icon" />
                  <p className="text-lg font-medium text-right">{it.q}</p>
                </section>

                <p
                  className={`h-6 w-6 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden
                >
                  {/* simple chevron */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </p>
              </button>

              <section
                id={`acc-panel-${i}`}
                aria-labelledby={`acc-btn-${i}`}
                className={`px-5 overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-in-out ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  maxHeight: isOpen ? "500px" : "0px",
                  transform: isOpen ? "translateY(0)" : "translateY(-4px)",
                }}
              >
                <section className="py-3 pb-6 text-justify text-[17px] leading-relaxed text-slate-500 dark:text-slate-300">
                  {it.a}
                </section>
              </section>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default Faq;
