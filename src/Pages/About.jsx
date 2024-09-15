import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="p-12">
        <div className="text-center mb-12">
          <h5 className="text-lg font-semibold text-gray-500">Get To Know</h5>
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-12 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2 flex justify-center">
            <div className="w-4/5 md:w-3/5">
              <img
                className="rounded-full w-full h-auto object-cover"
                src="https://i.pinimg.com/736x/f5/b0/45/f5b045627b6c125e500fc02f42d79763.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="md:w-1/2 space-y-8">
            <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
              <div
                className="flex flex-col items-center text-center text-white p-6 rounded-lg shadow-lg"
                style={{
                  background:
                    "linear-gradient(to right, rgb(54, 122, 159), rgb(25, 37, 46))",
                }}
              >
                <h5 className="text-lg font-semibold">Experience</h5>
                <p className="text-gray-300">In creating website</p>
              </div>

              <div
                className="flex flex-col items-center text-center text-white p-6 rounded-lg shadow-lg"
                style={{
                  background:
                    "linear-gradient(to right, rgb(54, 122, 159), rgb(25, 37, 46))",
                }}
              >
                <h5 className="text-lg font-semibold">Clients</h5>
                <p className="text-gray-300">With Happy Experience</p>
              </div>

              <div
                className="flex flex-col items-center text-center text-white p-6 rounded-lg shadow-lg"
                style={{
                  background:
                    "linear-gradient(to right, rgb(54, 122, 159), rgb(25, 37, 46))",
                }}
              >
                <h5 className="text-lg font-semibold">Projects</h5>
                <p className="text-gray-300">50+ web project</p>
              </div>
            </div>

            <p>
              As a frontend developer in the MERN stack ecosystem, my role is
              all about merging creativity with technical precision to deliver
              captivating web experiences. I leverage the full power of MongoDB,
              Express, React, and Node.js to build applications that are not
              only visually appealing but also highly interactive and dynamic.
              With JavaScript at the core, I use React to create responsive and
              efficient user interfaces, ensuring that the app looks fantastic
              and performs smoothly across devices of all sizes. JavaScript
              isn't just a tool—it's the backbone that powers the interactivity
              of modern web apps. Whether it's writing custom components,
              managing state with React hooks, or optimizing the DOM for snappy
              performance, I rely heavily on JS to build fast, seamless user
              experiences. On the backend, I use Node.js and Express to create
              scalable APIs that communicate with the frontend effortlessly,
              allowing data to flow between MongoDB and React in real time.
              Whether it's handling user authentication, managing sessions, or
              performing CRUD operations, the seamless integration between the
              frontend and backend is what powers the dynamic nature of my
              applications. Beyond coding, my focus extends to performance
              optimization, where I ensure each web app runs like a well-oiled
              machine, minimizing load times and maximizing responsiveness.
            </p>

            <div className="flex justify-center mt-6">
              <button className="bg-gradient-to-r from-[rgb(54,122,159)] to-[rgb(25,37,46)] text-white py-2 px-4 rounded hover:bg-pink-500 transition-colors duration-300">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
