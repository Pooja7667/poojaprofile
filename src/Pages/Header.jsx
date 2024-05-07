import React from "react";
import cv from "../Images/cv.pdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import "../Style/Header.css";

const Header = () => {
  const handleScrollDown = () => {
    const contectElement = document.getElementById("contect");
    if (contectElement) {
      contectElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="main-box" id="home">
        <div className="me">
          <div className="image-b">
            <img
              src="https://storage.googleapis.com/pai-images/ba6bdb8457e84d0c949885efc5eb7d28.jpeg"
              alt="me"
            />
          </div>

          <div>
            <a
              href="https://github.com/Pooja7667"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/pooja-gupta-gupta-4245491b8/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/pooja-gupta-gupta-4245491b8/"
              target="_blank"
              rel="noreferrer"
            >
              <AccountBoxIcon />
            </a>
          </div>

          <div>
            <a
              href="#contact"
              className="scroll_down"
              onClick={handleScrollDown}
            >
              Scroll Down
            </a>
          </div>
        </div>

        <header>
          <div className="container">
            <h5>Hello I' am</h5>
            <h1>Pooja Gupta</h1>
            <h5>Fullstack Developer</h5>
          </div>
        </header>

        <div className="cat">
          <button className="btn">
            <a href={cv} target="_blank" rel="noreferrer">
              Download CV
            </a>
          </button>
          <button
            className="btn btn-primary"
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
