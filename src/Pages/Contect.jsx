import React from "react";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="text-center mb-8 px-4">
        <h5 className="text-lg text-gray-600">Get In Touch</h5>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Contact Me
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start px-6 lg:px-12">
        <div className="flex flex-col space-y-8 lg:w-1/2 mb-8 lg:mb-0">
          <article className="text-center">
            <MarkEmailReadIcon className="text-blue-600 text-4xl mx-auto" />
            <h4 className="mt-2 mb-1 text-xl font-semibold">Email</h4>
            <h5 className="text-gray-700">kpk79046@gmail.com</h5>
            <a
              href="mailto:kpk79046@gmail.com"
              className="text-blue-500 hover:underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send an email
            </a>
          </article>
          <article className="text-center">
            <LinkedInIcon className="text-blue-600 text-4xl mx-auto" />
            <h4 className="mt-2 mb-1 text-xl font-semibold">LinkedIn</h4>
            <h5 className="text-gray-700">Pooja Gupta</h5>
            <a
              href="https://www.linkedin.com/in/pooja-gupta-gupta-4245491b8/"
              className="text-blue-500 hover:underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="text-center">
            <WhatsAppIcon className="text-green-500 text-4xl mx-auto" />
            <h4 className="mt-2 mb-1 text-xl font-semibold">WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+917667506485"
              className="text-blue-500 hover:underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact via WhatsApp
            </a>
          </article>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
              Contact Us
            </h2>
            <form
              action="mailto:kpk79046@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full p-3 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  value="Submit"
                  className="bg-gradient-to-r from-[rgb(54,122,159)] to-[rgb(25,37,46)] py-2 px-6 rounded cursor-pointer hover:bg-gradient-to-l transition duration-300 text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
