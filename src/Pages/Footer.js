import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[rgb(54,122,159)] to-[rgb(25,37,46)] py-32">
      <div className="container mx-auto text-center">
        <h3 className="text-white text-xl flex justify-center items-center space-x-2">
          <span>Created By Pooja Gupta With</span>
          <FavoriteIcon className="text-red-500" />
        </h3>
        <p className="text-white mt-2">
          Web development encompasses the creation and maintenance of websites
          and web applications.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
