import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";

const ContactUs = () => {
  const form = useRef();
  const [isdone, setisDone] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setisDone(true);
    emailjs
      .sendForm(
        "service_f31s2xj",
        "template_xoplvwo",
        e.target,
        "eoWAhQwK3TjOw1CYt"
      )
      .then((result) => {
        setisDone(false);
        toast("👏 Message sent successfully");
        e.target.reset();
      })
      .catch((err) => console.log(err));
  }
  return (
    <section id="contact" className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <section
        className="border rounded-2xl bg-slate-100"
        style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px" }}
      >
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-center text-indigo-900">
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16  text-center text-black font-bold sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form ref={form} onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-800 block w-full p-2.5 focus:outline"
                placeholder="sample@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-800 block w-full p-2.5 focus:outline"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                name="message"
                className="shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-800 block w-full p-2.5 focus:outline"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white w-full md:w-max bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800 flex justify-center items-center"
            >
              {isdone ? (
                <CircularProgress size={25} sx={{ color: "white" }} />
              ) : (
                "Send message"
              )}
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default ContactUs;
