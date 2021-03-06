import { useState } from "react";
import Button from "./Button";

export default function FreeAnalysisForm({ setShowModal, showModal }) {
  function onSubmit() {
    return;
  }
  const [message, setMessage] = useState("");
  const error = "Failed, please refresh and try again!";
  //Message Sent!
  return (
    <div className="flex flex-col justify-center items-center h-full w-full dark:bg-gray-900">
      <div className="border p-5 rounded-md shadow-sm">
        {/* <Button onClick={() => setShowModal(!showModal)}>&times;</Button> */}
        <div className="text-center">
          <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
            Free Analysis
          </h1>
          <p className="text-gray-400 dark:text-gray-400">
            Fill up the form below to send us a message.
          </p>
        </div>
        <div className="m-7">
          <form onSubmit={onSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+1 (555) 1234-567"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Your Message
              </label>

              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                required
              ></textarea>
            </div>
            <div className="mb-6">
              <Button type="submit">Send Message</Button>
            </div>
            {message && (
              <p
                className={`text-base text-center text-${
                  message.contains("Error") ? "red" : "green"
                }-400`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
