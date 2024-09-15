import React from "react";
import cv from "../Images/cv.pdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  const handleScrollDown = () => {
    const contectElement = document.getElementById("contect");
    if (contectElement) {
      contectElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="main-box flex flex-col items-center py-8 bg-gradient-to-r from-[rgb(54,122,159)] to-[rgb(25,37,46)]"
        id="home"
      >
        <div className="me flex flex-col items-center justify-center mb-6 group transition-all duration-300 ease-in-out">
          <div className="image-b relative group-hover:bg-[rgb(54,122,159)] p-4 rounded-full transition-all duration-300">
            <img
              src="https://storage.googleapis.com/pai-images/ba6bdb8457e84d0c949885efc5eb7d28.jpeg"
              alt="me"
              className="w-80 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            
          </div>

          <div className="mt-6 flex space-x-4 group-hover:text-white transition-colors duration-300">
            <a
              href="https://github.com/Pooja7667"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-pink-500"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/pooja-gupta-gupta-4245491b8/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-pink-500"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/pooja-gupta-gupta-4245491b8/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-pink-500"
            >
              <AccountBoxIcon />
            </a>
          </div>

          <div>
            <a
              href="#contact"
              className="text-blue-500 hover:underline mt-4 block group-hover:text-white transition-colors duration-300"
              onClick={handleScrollDown}
            >
              Scroll Down
            </a>
          </div>
        </div>

        <header className="text-center group-hover:text-white transition-colors duration-300">
          <div className="container">
            <h5 className="text-lg text-white  group-hover:text-white transition-colors duration-300">
              Hello I am
            </h5>
            <h1 className="text-3xl text-white font-bold group-hover:text-white transition-colors duration-300">
              Pooja Gupta
            </h1>

            <span className="text-white font-bold text-xl group-hover:text-white transition-colors duration-300 mt- 5">
              <Typewriter
                words={[
                  "FullStack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                ]}
                loop={50}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        </header>

        <div className="cat flex justify-center space-x-4 mt-6">
          <button className="btn bg-gradient-to-r from-[rgb(54,122,159)] to-[rgb(25,37,46)] text-white py-2 px-4 rounded hover:bg-pink-500 transition-colors duration-300">
            <a href={cv} target="_blank" rel="noreferrer">
              Download CV
            </a>
          </button>
          <button
            className="btn btn-primary bg-gradient-to-r from-[rgb(54,122,159)] to-[rgb(25,37,46)] text-white py-2 px-4 rounded hover:bg-pink-500 transition-colors duration-300"
            id="contect"
            onClick={handleScrollDown}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
