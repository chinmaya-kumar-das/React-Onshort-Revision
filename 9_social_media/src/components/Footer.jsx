import React from "react";

const Footer = () => {
  return (
    <div className="container ">
    <footer className="py-3  text-bg-white text-black">
      <ul className="nav justify-content-center  border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-black">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-black">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-black">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-black">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-black">
            About
          </a>
        </li>
      </ul>
      <p className="text-center text-black">© 2024 Company, Inc</p>
    </footer>
  </div>
  
  );
};

export default Footer;
