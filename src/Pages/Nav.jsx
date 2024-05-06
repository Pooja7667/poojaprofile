import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "../Style/Nav.css";

const Nav = () => {
  const [active, setActive] = useState("#");

  const handleClick = (link) => {
    setActive(link);
  };

  return (
    <nav className="nav-box">
      <a
        href="#home"
        rel=""
        className={active === "#home" ? "active" : ""}
        onClick={() => handleClick("#home")}
      >
        <HomeIcon />
      </a>
      <a
        href="#about"
        rel=""
        className={active === "#about" ? "active" : ""}
        onClick={() => handleClick("#about")}
      >
        <PersonIcon />
      </a>
      <a
        href="#experience"
        rel=""
        className={active === "#experience" ? "active" : ""}
        onClick={() => handleClick("#experience")}
      >
        <LibraryBooksIcon />
      </a>
   
      <a
        href="#contact"
        rel=""
        className={active === "#contact" ? "active" : ""}
        onClick={() => handleClick("#contact")}
      >
        <ContactMailIcon />
      </a>
    </nav>
  );
};

export default Nav;
