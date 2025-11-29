import React, { useState } from "react";
import emailjs from "emailjs-com";

import Faq from "./Faq";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "نام و نام خانوادگی الزامی است";
    if (!formData.email.trim()) return "ایمیل الزامی است";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "ایمیل معتبر نیست";
    if (!formData.subject.trim()) return "موضوع را وارد کنید";
    if (!formData.budget.trim()) return "بودجه را انتخاب کنید";
    if (!formData.message.trim()) return "توضیحات نمی‌تواند خالی باشد";

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    emailjs
      .send(
        "service_zqfbtxn",
        "template_ivq9808",
        formData,
        "npHn3HIharub0Kt9c"
      )
      .then(() => {
        setStatus({
          type: "success",
          message: "پیام شما با موفقیت ارسال شد!",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          budget: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "ارسال پیام با خطا مواجه شد. دوباره امتحان کنید.",
        });
      });
  };

  return (
    <section className="w-full h-full flex flex-col gap-6 shadow-[0_8px_25px_rgba(0,0,0,0.25)] bg-white p-6 rounded-2xl lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-5 dark:bg-blue-950 dark:text-white">
      <h3 className="text-3xl font-semibold">تماس با ما</h3>
      <p className="text-justify text-slate-500 dark:text-slate-300">
        تیم ما اماده ی همکاری و اجرای پروژه های شما در زمینه های طراحی سایت و
        سئو در کوتاه ترین زمان ممکن اعلام امادگی میکند و همچنین برای عملی کردن
        ایده های خود روی کمک ما حساب کنید.
      </p>

      <section className="bg-slate-100 rounded-lg p-6 dark:bg-blue-700">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-3 rounded-md border outline-none dark:bg-blue-950 dark:border-none"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">ایمیل</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 rounded-md border outline-none dark:bg-blue-950 dark:border-none"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-1 text-sm font-medium">موضوع</label>
            <input
              type="text"
              name="subject"
              className="w-full p-3 rounded-md border outline-none dark:bg-blue-950 dark:border-none"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          {/* Budget Select */}
          <div>
            <label className="block mb-1 text-sm font-medium">بودجه</label>
            <select
              name="budget"
              className="w-full bg-white cursor-pointer p-3 rounded-md border outline-none dark:bg-blue-950 dark:border-none"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">انتخاب کنید</option>
              <option value="۱۰ میلیون">۱۰ میلیون</option>
              <option value="۱۰ تا ۱۵ میلیون">۱۰ تا ۱۵ میلیون</option>
              <option value="۱۵ تا ۲۰ میلیون">۱۵ تا ۲۰ میلیون</option>
              <option value="بیشتر از ۲۰ میلیون">بیشتر از ۲۰ میلیون</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm font-medium">توضیحات</label>
            <textarea
              name="message"
              className="w-full p-3 rounded-md border h-32 resize-none outline-none dark:bg-blue-950 dark:border-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Status */}
          {status && (
            <p
              className={`text-sm p-2 rounded-md text-white ${
                status.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition dark:bg-blue-950 dark:hover:bg-[rgba(23,37,84,0.8)]"
          >
            ارسال فرم
          </button>
        </form>
      </section>

      <Faq />
    </section>
  );
};

export default ContactUs;
