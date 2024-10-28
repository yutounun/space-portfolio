"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const template = `Hi Yuto 👋,

I came across your portfolio and was really impressed by your work, especially [specific project or skill]. I believe your expertise could be a great fit for our team.

Would you be open to a quick conversation to explore potential opportunities?

Looking forward to hearing from you.
`;

const Contact = () => {
  const [msg, setMsg] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      await emailjs
        .sendForm(
          "service_z1i5ilr",
          "template_rdm5ztg",
          form.current,
          "BDhsAvSijZwKUZ72O"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send message. Please try again later.");
          }
        )
        .finally(() => {
          if (form.current) {
            form.current.reset();
            setMsg("");
          }
        });
    }
  };

  return (
    <div
      className="w-full  px-10 flex items-center justify-center"
      id="contact"
    >
      <div className="pb-12 md:py-12 md:p-8 rounded-lg shadow-md w-full md:w-2/3">
        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3">
          Contact
        </h2>
        <p className="text-gray-300 mb-6">
          Feel free to reach out with just a &quot;Hey!👋&quot;. If it&apos;s
          work-related, using the template can make filling out the form a
          breeze!
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="z-[20] text-gray-800 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="z-[20] text-gray-800 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="company" className="text-gray-300 mb-1">
              Company Name
            </label>
            <input
              type="company"
              id="company"
              name="company"
              placeholder="Your Company Name"
              className="z-[20] text-gray-800 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={msg}
              rows={5}
              placeholder="Your message"
              className="z-[20] text-gray-800 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              className="p-0 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white z-20 relative w-24 h-8 mt-2 hover:bg-gray-700"
              onClick={() => setMsg(template)}
            >
              Template
            </button>
          </div>
          <button
            type="submit"
            className="py-2 button-primary flex justify-center items-center text-white cursor-pointer rounded-lg h-12 md:h-auto flex-grow w-full mt-4 md:w-1/3 mx-auto text-center z-[50] relative"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
