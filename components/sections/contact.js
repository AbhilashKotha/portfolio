import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import handleSubmit from "../../utils/submitForm.js";
import { MdEmail } from "react-icons/md";
import {
  AiFillLinkedin,
} from "react-icons/ai";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact" className="max-w-screen-2xl mx-auto">
      <div className="mx-auto max-w-screen-xl py-16">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div
            data-aos="fade-up"
            data-aos-once
            className="lg:col-span-2 lg:py-12"
          >
            <h1 className="text-center md:text-start text-4xl md:text-5xl py-5 font-gilroybold bg-clip-text dark:text-transparent text-wild-blue-400 dark:bg-gradient-to-r dark:from-[#7600ec] dark:to-[#ff00d9]">
              Get In Touch.
            </h1>

            <div className="md:mt-2">
              <p className=" text-md md:text-lg text-center font-gilroy md:text-start text-pf-dark dark:text-pf-light">
                Please send me an email or an InMail on LinkedIn 
              </p>
              <br></br>
              <a
                  className="flex items-center hover:text-[#D54B3E] transition duration-500"
                  href="mailto:kotha.abhilash@gmail.com"
                >
                <MdEmail className="mr-2"/> kotha.abhilash@gmail.com
                </a>
                <a
              className="flex items-center hover:text-[#0077b5] transition duration-500"
              href="https://www.linkedin.com/in/abhilashkotha/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillLinkedin className="mr-2"/> https://www.linkedin.com/in/abhilashkotha/
            </a>
            </div>
          </div>

            

          <div
            data-aos="fade-up"
            data-aos-once
            className="transition-colors duration-300 relative rounded-lg -mt-6 lg:mt-0 p-2 md:p-8 lg:col-span-3 lg:p-12"
          >
          </div>
        </div>
      </div>
    </section>
  );
}

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Please enter a name.";
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }

  if (!values.message) {
    errors.message = "Please enter a message.";
  }

  return errors;
};

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validate,
    onSubmit: (values, actions) => {
      handleSubmit("contact", values);
      actions.resetForm();
      setSubmitted(true);
    },
  });

  return (
    <div className="rounded-3xl p-px bg-transparent lg:bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800">
      <form
        name="contact"
        onSubmit={formik.handleSubmit}
        data-netlify="true"
        className="space-y-4 bg-white dark:bg-darkmode md:p-6 rounded-[calc(1.5rem-1px)] relative"
      >
        <div>
          <label className="font-gilroy relative">
            <input
              className="font-gilroy w-full dark:text-white transition duration-200 rounded-xl border dark:bg-darkmode dark:border-gray-600 border-gray-200 p-3 text-sm focus:outline-none"
              type="text"
              id="name"
              name="name"
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => setSubmitted(false)}
              value={formik.values.name}
            />
            <span className="cursor-text text-md text-gray-500 dark:text-pf-light text-opacity-80 absolute left-0 -top-1 mx-1 px-2 transition duration-200 input-text">
              Name
            </span>
          </label>
          {formik.errors.name && formik.touched.name && (
            <p className="text-sm text-wild-blue-400 lg:text-base">
              {formik.errors.name}
            </p>
          )}
        </div>
        <div>
          <label className="font-gilroy relative">
            <input
              className="font-gilroy w-full dark:text-white transition duration-200 rounded-xl border dark:bg-darkmode dark:border-gray-600 border-gray-200 p-3 text-sm focus:outline-none"
              type="email"
              id="email"
              name="email"
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => setSubmitted(false)}
              value={formik.values.email}
            />
            <span className="cursor-text text-md text-gray-500 dark:text-pf-light text-opacity-80 absolute left-0 -top-1 mx-1 px-2 transition duration-200 input-text">
              Email address
            </span>
          </label>
          {formik.errors.email && formik.touched.email && (
            <p className="text-sm text-wild-blue-400 lg:text-base">
              {formik.errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="font-gilroy relative">
            <textarea
              className="font-gilroy w-full dark:text-white transition duration-200 rounded-xl border dark:bg-darkmode dark:border-gray-600 border-gray-200 p-3 text-sm focus:outline-none"
              rows="8"
              type="text"
              id="message"
              name="message"
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => setSubmitted(false)}
              value={formik.values.message}
            />
            <span className="cursor-text text-md text-gray-500 dark:text-pf-light text-opacity-80 absolute left-0 py-3 mx-1 px-2 transition duration-200 input-text">
              Message
            </span>
          </label>
          {formik.errors.message && formik.touched.message && (
            <p className="text-sm text-wild-blue-400 lg:text-base">
              {formik.errors.message}
            </p>
          )}
          {submitted && (
            <p className="text-sm text-wild-blue-400 dark:text-wild-blue-400 lg:text-base">
              Success! I will get back to you soon.
            </p>
          )}
        </div>

        <div className="mt-2">
          <div className="relative group mt-2">
            <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#7928CA] to-[#FF0080] rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button
              type="submit"
              className="transition-colors duration-300 relative text-sm lg:text-md inline-flex w-full items-center justify-center rounded-xl shadow-light-button dark:shadow-none active:shadow-inner bg-white dark:bg-darkmode px-5 py-3 text-gray-600 dark:text-gray-200"
            >
              <span className="text-gray-500 font-gilroy dark:text-pf-light">
                Say Hi.
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
