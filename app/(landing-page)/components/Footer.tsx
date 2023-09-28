import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__text">
        <p> Copyright &copy; 2023 by Ndollawa | All Rights Reserved.</p>
      </div>
      <div className="footer__iconToTop">
        <a href="#home">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
