import React from "react";
import "../Style/footer.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h3 className="logo">
          <span>Created By Pooja Gupta With </span>
          <FavoriteIcon />
        </h3>
        <p>
          Web development encompasses the creation and maintenance of websites
          and web applications.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
